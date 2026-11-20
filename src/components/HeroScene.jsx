import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;

  float wave(vec3 p) {
    return sin(p.x * 2.1 + uTime * 0.9) * sin(p.y * 2.3 + uTime * 1.1) * sin(p.z * 1.9 + uTime * 0.7);
  }

  void main() {
    float d = wave(position * 1.2) * uAmp + wave(position * 2.6 + 3.0) * uAmp * 0.45;
    vec3 pos = position + normal * d;
    vDisp = d;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uA;
  uniform vec3 uB;
  uniform vec3 uC;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;

  void main() {
    float fres = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);
    vec3 col = mix(uA, uB, smoothstep(-0.25, 0.25, vDisp));
    col = mix(col, uC, fres);
    gl_FragColor = vec4(col * (0.45 + fres * 1.35), 1.0);
  }
`;

function Orb({ reduced }) {
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.22 },
      uA: { value: new THREE.Color("#3b1d8f") },
      uB: { value: new THREE.Color("#7c5cff") },
      uC: { value: new THREE.Color("#22d3ee") },
    }),
    []
  );

  useFrame((state, delta) => {
    const speed = reduced ? 0.15 : 1;
    uniforms.uTime.value += delta * speed;
    mesh.current.rotation.y += delta * 0.12 * speed;
    mesh.current.rotation.x += delta * 0.05 * speed;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.35, 48]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
    </mesh>
  );
}

function WireShell() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y -= delta * 0.08;
    ref.current.rotation.z += delta * 0.03;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.95, 1]} />
      <meshBasicMaterial color="#7c5cff" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function Rings() {
  const a = useRef();
  const b = useRef();
  useFrame((_, delta) => {
    a.current.rotation.z += delta * 0.25;
    b.current.rotation.z -= delta * 0.18;
  });
  return (
    <>
      <mesh ref={a} rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[2.35, 0.008, 8, 160]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.55} />
      </mesh>
      <mesh ref={b} rotation={[Math.PI / 1.7, -0.5, 0]}>
        <torusGeometry args={[2.7, 0.006, 8, 160]} />
        <meshBasicMaterial color="#f472b6" transparent opacity={0.4} />
      </mesh>
    </>
  );
}

/** Points on a sphere connected to near neighbours — a "network" constellation. */
function Network({ count = 70, radius = 3.1 }) {
  const group = useRef();
  const { points, lines } = useMemo(() => {
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const jitter = radius * (0.9 + Math.random() * 0.25);
      pts.push(new THREE.Vector3(Math.cos(t) * r * jitter, y * jitter, Math.sin(t) * r * jitter));
    }
    const seg = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 1.05) seg.push(pts[i], pts[j]);
      }
    }
    return {
      points: new THREE.BufferGeometry().setFromPoints(pts),
      lines: new THREE.BufferGeometry().setFromPoints(seg),
    };
  }, [count, radius]);

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={group}>
      <points geometry={points}>
        <pointsMaterial color="#c4b5fd" size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#7c5cff" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

function Stars({ count = 1400 }) {
  const ref = useRef();
  const geometry = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#ffffff" size={0.04} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

/** Tilts the whole scene toward the pointer and drifts with page scroll. */
function Rig({ children }) {
  const group = useRef();
  useFrame((state) => {
    const g = group.current;
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.35, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.25 + scroll * 0.3, 0.05);
    g.position.y = THREE.MathUtils.lerp(g.position.y, scroll * 0.8, 0.08);
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroScene({ active = true, reduced = false, compact = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, compact ? 9 : 7.2], fov: 45 }}
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <Rig>
        <Orb reduced={reduced} />
        <WireShell />
        <Rings />
        <Network count={compact ? 45 : 70} />
      </Rig>
      <Stars count={compact ? 700 : 1400} />
    </Canvas>
  );
}

import { Container, Heading } from "@chakra-ui/react";
import style from "../Style/About.module.css";
import Rotate from 'react-reveal/Rotate';

function About() {
  return (
    <div id="about" className="about section">
      <div className={style.about}>
        <div>
          <Heading marginTop={["10px","20px","40px","70px"]}>About Me</Heading>
        </div>
        <div className={style.about_div}>
          <Rotate bottom left>
          <div id="user-detail-intro" className={style.about_first}>
            <Container>
              <h1>
                Adaptable and responsible web developer capable of writing
                production-ready code using HTML, CSS, JavaScript, React.js on
                the Frontend and Node.js, Express.js and MongoDB on the Backend
                to build single-page applications. Looking forward to working in
                a fastpaced environment and playing a key role in a company's
                growth. Hope to work in a challenging environment as a
                specialized MERN Stack Developer.
              </h1>
            </Container>
          </div>
          </Rotate>
          <Rotate top right>
          <div className={style.about_second}>
            <img
              className={style.about_second_img}
              src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
              alt="laptop"
            />
          </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
}
export default About;

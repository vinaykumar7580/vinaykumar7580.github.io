import style from "../Style/Projects.module.css";
import { Button, Container, Heading, Image } from "@chakra-ui/react";
import limeroadImage from "../Extra/limeroad.png";
import ebayImage from "../Extra/ebayproject.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import balancedbiteImage from "../Extra/balanced-bite-image.png";
import healthkartImage from "../Extra/healthkart-clone-image.png";

function Projects() {
  return (
    <div id="projects" className={style.projects}>
      <Heading marginTop={["10px", "20px", "40px", "70px"]}>Projects</Heading>
      <div className={style.projectChild}>
        <Slide left>
          <div className={style.projectCard}>
            <div className="project-card">
              <div className="project-title">
                <Heading size={"md"} textAlign={"left"} padding={"20px"}>
                  Balanced Bite
                </Heading>
              </div>
              <Image src={balancedbiteImage} />
              <div className="project-description">
                <p className={style.desc_p}>
                Balanced Bite is a meal kit service that delivers 2–4 recipes
                  to your door each week, along with all the preportioned
                  ingredients you need to make the meals. The idea behind meal
                  kits is to simplify the cooking process and save times.
                </p>
                <hr />
              </div>
              <div className="project-tech-stack">
                <div>
                  <Heading size={"sm"} textAlign={"left"} padding={"20px"}>
                    Teck Stack :- React.js, Redux, Node.js, ChakraUI, Mongo DB
                  </Heading>
                </div>
                <hr />
              </div>
              <div className={style.gitLive}>
                <div className="project-github-link">
                  <a
                    href="https://github.com/vinaykumar7580/Balanced-Bite"
                    target="_blank"
                  >
                    <Button leftIcon={<BsGithub />} color={"red"}>
                      Github
                    </Button>
                  </a>
                </div>
                <div className="project-deployed-link">
                  <a
                    href="https://balanced-bite-nem.vercel.app/"
                    target="_blank"
                  >
                    <Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className={style.projectCard}>
            <div className="project-card">
              <div className="project-title">
                <Heading size={"md"} textAlign={"left"} padding={"20px"}>
                  Buffer.com Clone
                </Heading>
              </div>
              <Image src="https://sunilrath101.github.io/static/media/buffer.ce6b58765eef5e1e3378.png" />
              <div className="project-description">
                <p className={style.desc_p}>
                  Buffer.com is a software application for the web and mobile,
                  designed to manage accounts in social networks, by providing
                  the means for a user to schedule posts to Social Media Pages.
                </p>
                <hr />
              </div>
              <div className="project-tech-stack">
                <div>
                  <Heading size={"sm"} textAlign={"left"} padding={"20px"}>
                    Teck Stack :- HTML, CSS, JavaScript
                  </Heading>
                </div>
                <hr />
              </div>
              <div className={style.gitLive}>
                <div className="project-github-link">
                  <a
                    href="https://github.com/vinaykumar7580/Buffer-clone"
                    target="_blank"
                  >
                    <Button leftIcon={<BsGithub />} color={"red"}>
                      Github
                    </Button>
                  </a>
                </div>
                <div className="project-deployed-link">
                  <a
                    href="https://benevolent-banoffee-7cc394.netlify.app/"
                    target="_blank"
                  >
                    <Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className={style.projectCard}>
            <div className="project-card">
              <div className="project-title">
                <Heading size={"md"} textAlign={"left"} padding={"20px"}>
                  Healthkart.com Clone
                </Heading>
              </div>
              <Image src={healthkartImage} />
              <div className="project-description">
                <p className={style.desc_p}>
                  Healthkart is an online platform intended to provide authentic
                  health and nutritional supplements. The company's platform
                  provides a wide range of protein supplements, weight loss
                  products, gym memberships, and personal trainers.
                </p>
                <hr />
              </div>
              <div className="project-tech-stack">
                <div>
                  <Heading size={"sm"} textAlign={"left"} padding={"20px"}>
                    Teck Stack :- React.JS, Redux, ChakraUI, Node.js,
                    Express.js, Mongo DB
                  </Heading>
                </div>
                <hr />
              </div>
              <div className={style.gitLive}>
                <div className="project-github-link">
                  <a
                    href="https://github.com/vinaykumar7580/Healthkart-Clone"
                    target="_blank"
                  >
                    <Button leftIcon={<BsGithub />} color={"red"}>
                      Github
                    </Button>
                  </a>
                </div>
                <div className="project-deployed-link">
                  <a
                    href="https://frontend-vinaykumar7580.vercel.app/"
                    target="_blank"
                  >
                    <Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className={style.projectCard}>
            <div className="project-card">
              <div className="project-title">
                <Heading size={"md"} textAlign={"left"} padding={"20px"}>
                  Balanced Bite
                </Heading>
              </div>
              <Image src={balancedbiteImage} />
              <div className="project-description">
                <p className={style.desc_p}>
                  Balanced Bite is a meal kit service that delivers 2–4 recipes
                  to your door each week, along with all the preportioned
                  ingredients you need to make the meals. The idea behind meal
                  kits is to simplify the cooking process and save time for
                  individuals.
                </p>
                <hr />
              </div>
              <div className="project-tech-stack">
                <div>
                  <Heading size={"sm"} textAlign={"left"} padding={"20px"}>
                    Teck Stack :- React.js, Redux, Node.js, ChakraUI, Mongo DB
                  </Heading>
                </div>
                <hr />
              </div>
              <div className={style.gitLive}>
                <div className="project-github-link">
                  <a
                    href="https://github.com/vinaykumar7580/Balanced-Bite"
                    target="_blank"
                  >
                    <Button leftIcon={<BsGithub />} color={"red"}>
                      Github
                    </Button>
                  </a>
                </div>
                <div className="project-deployed-link">
                  <a
                    href="https://balanced-bite-nem.vercel.app/"
                    target="_blank"
                  >
                    <Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
export default Projects;

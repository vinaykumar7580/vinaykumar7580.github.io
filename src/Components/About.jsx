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
              src="https://img.freepik.com/premium-vector/ceo-chief-executive-officer-cartoon-illustration-businessman-work_2175-4824.jpg?size=626&ext=jpg&ga=GA1.1.1056998353.1659457435&semt=ais"
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

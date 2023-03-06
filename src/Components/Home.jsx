import style from "../Style/Home.module.css"
import {Image} from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';

import vinaykumar from './Vinaykumar_Hatwar_Resume.pdf'


function Home(){
    function downloadFile() {
        let link = document.createElement("a");
        link.download = "Vinaykumar_Hatwar_Resume.pdf";
        link.href = vinaykumar;
        link.click();
        link.remove();
      }
    return (
       <div id="home" className={style.home}>
        <div className={style.home_first}>
            <h2 className={style.home_first_h2}>Hii🔥 my name is</h2>
            <p id="user-detail-name" className={style.home_first_p}>Vinaykumar Hatwar</p>
            <div className={style.home_first_h2}>
            <Typewriter
               options={{
               strings: ['I am a Full Stack Web Developer.', 'I am a Problem Solver.'],
               autoStart: true,
               loop: true,
               }}
            />
            </div>
            <br />
            {/* <button >Resume</button> */}
            <button  id="resume-button-2" className={style.home_first_button} onClick={() => {
                  window.location.href =
                    "https://drive.google.com/file/d/1nIZ22kphOha2cCJBm7Hao0AA4nwRk3eF/view?usp=sharing";
                  downloadFile();
                }}>Resume</button>
        </div>
        <div className={style.home_second}>
            <Image className="home-img" border="10px solid #8458B3" borderRadius='full' boxSize='230px' src="https://avatars.githubusercontent.com/u/107460290?v=4" alt="profile-pic" />
            
        </div>
       </div>
    )
}
export default Home
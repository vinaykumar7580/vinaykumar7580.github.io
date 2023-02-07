import style from "../Style/Home.module.css"
import {Image} from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';


function Home(){
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
            <button className={style.home_first_button}>Resume</button>
        </div>
        <div className={style.home_second}>
            <Image className="home-img" borderRadius='full' boxSize='230px' src="https://avatars.githubusercontent.com/u/107460290?v=4" alt="profile-pic" />
           
        </div>
       </div>
    )
}
export default Home
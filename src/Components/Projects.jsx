import style from "../Style/Projects.module.css"
import { Button, Container, Heading,Image } from "@chakra-ui/react"
import limeroadImage from "../Extra/limeroad.png"
import ebayImage from "../Extra/ebayproject.png"
import {ExternalLinkIcon} from "@chakra-ui/icons"
import {BsGithub} from 'react-icons/bs';

function Projects(){
    return(
        <div id="projects" className={style.projects}>
            <Heading>Projects</Heading>
            <div className={style.projectChild}>
            <div className={style.projectCard}>
            <div className="project-title">
                   <Heading size={"md"} textAlign={"left"} padding={"20px"}>Buffer.com Clone</Heading>
                </div>
                <Image src="https://sunilrath101.github.io/static/media/buffer.ce6b58765eef5e1e3378.png"/>
                <div className="project-description">
                    <p className={style.desc_p}>Buffer.com is a software application for the web and mobile, designed to manage accounts in social networks, by providing the means for a user to schedule posts to Social Media Pages.</p>
                    <hr />
                </div>
                <div className="project-tech-stack">
                    <div>
                    <Heading size={"sm"} textAlign={"left"} padding={"20px"}>Teck Stack :- HTML,  CSS,  JavaScript</Heading>
                    </div>
                    <hr />

                </div>
                <div className={style.gitLive}>
                    <div className="project-github-link">
                    <a href="https://github.com/vinaykumar7580/Buffer-clone" target="_blank"><Button leftIcon={<BsGithub/>} color={"red"}>
                        Github
                    </Button></a>
                    
                    </div>
                    <div className="project-deployed-link">
                    <a href="https://benevolent-banoffee-7cc394.netlify.app/" target="_blank"><Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                        Live
                    </Button></a>
                    </div>
                </div>
            </div>
            <div className={style.projectCard}>
                <div className="project-title">
                   <Heading size={"md"} textAlign={"left"} padding={"20px"}>Naukri.com Clone</Heading>
                </div>
                <Image src="https://sam202003.github.io/naukari.png"/>
                <div className="project-description">
                    <p className={style.desc_p}>
                        Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas.
                    </p>
                    <hr />

                </div>
                <div className="project-tech-stack">
                    <div>
                    <Heading size={"sm"} textAlign={"left"} padding={"20px"}>Teck Stack :- HTML,  CSS,  JavaScript</Heading>
                    </div>
                    <hr />

                </div>
                <div className={style.gitLive}>
                    <div className="project-github-link">
                    <a href="https://github.com/vinaykumar7580/naukri.com-clone" target="_blank"><Button leftIcon={<BsGithub/>} color={"red"}>
                        Github
                    </Button></a>
                    
                    </div>
                    <div className="project-deployed-link">
                    <a href="https://astounding-pie-721745.netlify.app/" target="_blank"><Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                        Live
                    </Button></a>
                    </div>
                </div>
            </div>
            <div className={style.projectCard}>
            <div className="project-title">
                   <Heading size={"md"} textAlign={"left"} padding={"20px"}>Ebay.com Clone</Heading>
                </div>
                <Image src={ebayImage}/>
                <div className="project-description">
                    <p className={style.desc_p}>Ebay.com is an e-commerce website where you can buy and sell electronics, fashion, toys, sports and more products.</p>
                    <hr />
                </div>
                <div className="project-tech-stack">
                    <div>
                    <Heading size={"sm"} textAlign={"left"} padding={"20px"}>Teck Stack :- React.JS, CSS, ChakraUI, Redux, Firebase</Heading>
                    </div>
                    <hr />

                </div>
                <div className={style.gitLive}>
                    <div className="project-github-link">
                    <a href="https://github.com/faisalinfinity/hilarious-sort-6480" target="_blank"><Button leftIcon={<BsGithub/>} color={"red"}>
                        Github
                    </Button></a>
                    
                    </div>
                    <div className="project-deployed-link">
                    <a href="https://productify.vercel.app/" target="_blank"><Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                        Live
                    </Button></a>
                    </div>
                </div>
            </div>
            <div className={style.projectCard}>
            <div className="project-title">
                   <Heading size={"md"} textAlign={"left"} padding={"20px"}>Limeroad.com Clone</Heading>
                </div>
                <Image src={limeroadImage}/>
                <div className="project-description">
                    <p className={style.desc_p}>LimeRoad.com is an Indian fashion e-commerce company. The company sells apparel and accessories for women, men and kids.</p>
                    <hr />
                </div>
                <div className="project-tech-stack">
                    <div>
                      <Heading size={"sm"} textAlign={"left"} padding={"20px"}>Teck Stack :- React.JS,  CSS,  ChakraUI</Heading>
                    </div>
                    <hr />

                </div>
                <div className={style.gitLive}>
                   <div className="project-github-link">
                    <a href="https://github.com/vinaykumar7580/rampant-control-1239" target="_blank"><Button leftIcon={<BsGithub/>} color={"red"}>
                        Github
                    </Button></a>
                    
                    </div>
                    <div className="project-deployed-link">
                    <a href="https://stylehub.vercel.app/" target="_blank"><Button leftIcon={<ExternalLinkIcon />} color={"green"}>
                        Live
                    </Button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Projects
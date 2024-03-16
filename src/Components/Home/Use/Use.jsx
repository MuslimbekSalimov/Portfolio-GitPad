import "./Use.scss"
import Brat from "../img/Brat.png";
import Brat1 from "../img/brat1.png";
import "aos/dist/aos.css"
import React, { useEffect } from "react";
import Aos from "aos";

// Brends
import GitLab from "../img/GITLABB.png";
import freeCode from "../img/free.png";
import dWAVE from "../img/wave.png";
import Google from "../img/Google.png";
import Amazon from "../img/Amazon.png";
import Facebook from "../img/Facebook.png";
import Uber from "../img/Uber.png";
import OpenAI from "../img/CHARGPT.png";
import Intel from "../img/Intel.png";
import Thei from "../img/thei.png"; 
import Code from "../img/Codeins.png";
import G4ageb from "../img/4gAcademy.png";
import Languages from "../../Hooks/Localization";
import { Context as ContextProvider } from "../../Context/Localization";

function Use() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    const {lang} = React.useContext(ContextProvider)

    return (
        <>
        <section className="use">
            <div className="container">
                <div className="use__info" data-aos="zoom-in">
                    <h5 className="use__heading">{Languages[lang].use.use__heading}</h5>

                    <ul className="use__list">
                        <li className="use__item">
                            <p className="use__list--heading">{Languages[lang].use.use__list}</p>
                            <p className="use__list--text">{Languages[lang].use.use__list1}</p>

                            <div className="use__div">
                                <img src={Brat} alt="Brat" width={48} height={48}/>

                                <div className="use__elements">
                                    <p className="use__elements--heading">Ben Halpern</p>
                                    <p className="use__elements--text">Creator and Co-founder 
                                       <span className="use__elements--span">
                                         @forem
                                        </span >  
                                           and <br/>
                                         <span className="use__elements--span">
                                             @ThePracticalDev
                                        </span></p>
                                </div>
                            </div>
                        </li>

                        <li className="use__item">
                            <p className="use__list--heading">Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.</p>
                            <p className="use__list--text">Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;</p>

                            <div className="use__div">
                                <img src={Brat1} alt="Brat" />
                                <div className="use__elements">
                                    <p className="use__elements--heading">Michael Friedrich</p>
                                    <p className="use__elements--text">Developer Evangelist
                                       <span className="use__elements--span">
                                       @GitLab
                                        </span >  </p>
                                </div>
                            </div>
                        </li>

                        <li className="use__item">
                            <h5 className="use__list--heading">Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!</h5>
                            {/* <p className="use__list--text">In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p> */}

                            <div className="use__div">
                                <img src={Brat} alt="Brat" />

                                <div className="use__elements">
                                    <h5 className="use__elements--heading">Julius Volz</h5>
                                    <p className="use__elements--text">Creator
                                       <span className="use__elements--span">
                                         @PrometheusIO
                                        </span >  
                                        </p>
                                </div>
                            </div>
                        </li>

                        <li className="use__item">
                            <h5 className="use__list--heading">GitPod is incredibly cool.</h5>
                            <p className="use__list--text">In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>

                            <div className="use__div">
                                <img src={Brat} alt="Brat" />

                                <div className="use__elements">
                                    <h5 className="use__elements--heading">Ben Halpern</h5>
                                    <p className="use__elements--text">Creator and Co-founder 
                                       <span className="use__elements--span">
                                         @forem
                                        </span >  
                                           and
                                         <span className="use__elements--span">
                                             @ThePracticalDev
                                        </span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="brends" data-aos="fade-down">
                    <div className="brends__info">
                        <div className="div__img">
                            <a className="brends__img" href="https://about.gitlab.com/">
                                <img src={GitLab} alt="GitLab"  width={95} height={42}/>
                            </a>

                            <a className="brends__img" href="https://www.freecodecamp.org/">
                                <img src={freeCode} alt="freeCode"  width={138} height={20}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={dWAVE} alt="dWAVE"  width={95} height={21}/>
                            </a>

                            <a className="brends__img" href="https://www.google.com/">
                                <img src={Google} alt="Google"  width={138} height={36}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={Amazon} alt="Amazon"  width={138} height={33}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={Facebook} alt="Facebook"  width={138} height={22}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={Uber} alt="Uber"  width={138} height={37}/>
                            </a>
                            <br/>
                        </div>

                         <div className="img__div">
                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={OpenAI} alt="OpenAI"  width={138} height={31}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={Intel} alt="Intel"  width={138} height={67}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={Thei} alt="Thei"  width={138} height={17}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={Code} alt="Code"  width={138} height={46}/>
                            </a>

                            <a className="brends__img" href="https://www.waveapps.com/">
                                <img src={G4ageb} alt="G4ageb"  width={138} height={38}/>
                            </a>
                         </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Use;
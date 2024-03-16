import "./Connect.scss"
import GitLab from '../img/GitLabWhite.png';
import GitHub from "../img/Githubwhite.png";
import BitBucket from "../img/Bitbucket.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import React, { useEffect } from "react";
import Aos from "aos";

// Texnologiyalar
import Typescript from "../img/TypeScript.png";
import Python from "../img/Python.png";
import Go from "../img/Go.png";
import Rust from "../img/Rust.png";
import Java from "../img/Java.png";
import Svelte from '../img/Svelte.png';
import Languages from "../../Hooks/Localization";
import { Context as ContextProvider } from "../../Context/Localization";

function Connect() {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])

    const {lang} = React.useContext(ContextProvider)

    return (
        <>
        
        <section className="connect">
                <h4 className="connect__heading">{Languages[lang].connect.connect__heading}</h4>
            <div className="container">
                <div className="connect__info" data-aos="fade-left">
                    <h5 className="connect__heading--h5">{Languages[lang].connect.connect__heading1}</h5>
                    <p className="connect__text">{Languages[lang].connect.connect__heading2}</p>

                    <div className="connect__buttons">
                        <Link className="connect__button1">
                            <img src={GitLab} alt="GitLab"  width={28} height={28}/>
                            Continue with GitLab
                        </Link>

                        <Link className="connect__button2">
                            <img src={GitHub} alt="GitHub"   width={28} height={28}/>
                            Continue with GitHub
                        </Link>

                        <Link className="connect__button3">
                            <img src={BitBucket} alt="BitBucket" width={28} height={28}/>
                            Continue with Bitbucket
                        </Link>
                    </div>

                    <strong className="connect__strong">
                    Or prefix any GitLab, GitHub or Bitbucket URL <br/> with
                    </strong>

                    <code className="code">gitpod.io/#</code>
                </div>

                <div className="connect__info" data-aos="fade-right">
                    <h5 className="connect__heading--h5">{Languages[lang].connect.connect__h5}</h5>
                    <p className="connect__text">{Languages[lang].connect.connect__p}</p>

                    <ul className="connect__list">
                        <li className="connect__item">
                            <div className="need">
                            <img src={Typescript} alt="Typescript" />
                            <h5 className="connect__list--heading">Node or TypeScript</h5>
                            </div>
                            <Link className="connect__button--list">Launch workspace</Link>
                        </li>

                        <li className="connect__item">
                           <div className="need">
                            <img src={Python} alt="Python" />
                            <h5 className="connect__list--heading">Node or TypeScript</h5>
                            </div>
                            <Link className="connect__button--list">Launch workspace</Link>
                        </li>

                        <li className="connect__item">
                         <div className="need">
                            <img src={Go} alt="Go" />
                            <h5 className="connect__list--heading">Node or TypeScript</h5>
                            </div>
                            <Link className="connect__button--list">Launch workspace</Link>
                        </li>

                        <li className="connect__item">
                          <div className="need">
                            <img src={Rust} alt="Rust" />
                            <h5 className="connect__list--heading">Node or TypeScript</h5>
                            </div>
                            <Link className="connect__button--list">Launch workspace</Link>
                        </li>

                        <li className="connect__item">
                          <div className="need">
                            <img src={Java} alt="Java" />
                            <h5 className="connect__list--heading">Node or TypeScript</h5>
                            </div>
                            <Link className="connect__button--list">Launch workspace</Link>
                        </li>

                        <li className="connect__item">
                          <div className="need">
                            <img src={Svelte} alt="Svelte" />
                            <h5 className="connect__list--heading">Node or TypeScript</h5>
                            </div>
                            <Link className="connect__button--list">Launch workspace</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}

export default Connect;
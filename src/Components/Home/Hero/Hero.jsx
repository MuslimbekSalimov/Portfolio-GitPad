import "./Hero.scss"
import "aos/dist/aos.css"
import React, { useEffect } from "react";
import Aos from "aos";
import GitLAb from "../img/GitLab.png";
import GitHub from "../img/GitHub.png";
import Blue from "../img/Blue.png";
import Material from "../img/Material.png";
import Languages from "../../Hooks/Localization";
import { Context as ContextProvider } from "../../Context/Localization";
import { Link } from "react-router-dom";

function Hero() {
    useEffect(() => {
        Aos.init({duration:200});
    }, [])

    const { lang } = React.useContext(ContextProvider)
    return (
        <>

        <section className="hero">
            <div className="container">
                <div className="hero__info">
                    <div className="hero__info--div" data-aos="fade-right">
                        <h1 className="hero__heading">{Languages[lang].hero.hero__heading} <br/> {Languages[lang].hero.hero__heading1}</h1>
                        <p className="hero__text">{Languages[lang].hero.hero__text}<br/> {Languages[lang].hero.hero__text1}</p>

                        <div className="hero__button--div">
                            <Link className="hero__button--try">{Languages[lang].hero.hero__button}</Link>
                            <p className="btn btn-white hero__button--open">{Languages[lang].hero.hero__open}<br/>
                                {Languages[lang].hero.hero__open1}</p> 
                        </div>

                        <div className="apps__div">
                            <a className="apps__link" href="#GitLab">
                                <img src={GitLAb} alt="GitLAb" width={29} height={29}/>
                            </a>

                            <a className="apps__link" href="#GitLab">
                                <img src={GitHub} alt="GitHub" width={29} height={29}/>
                            </a>

                            <a className="apps__link" href="#GitLab">
                                <img src={Blue} alt="Blue" width={29} height={29}/>
                            </a>
                        </div>
                    </div>

                    <picture data-aos="fade-left">
                        <img src={Material} alt="Material" width={700} height={672}/>
                    </picture>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;
import "./Dev.scss";
import Code from "../img/code.png";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Aos from "aos";
import { Context as ContextProvider } from "../../Context/Localization";
import Languages from "../../Hooks/Localization";

function Dev() {
    useEffect(() => {
        Aos.init({duration: 20000});
    }, []);

    const {lang} = React.useContext(ContextProvider)
    return (
        <>
        <section className="dev">
            <div className="container">
                <div className="dev__info" data-aos="fade-down">
                    <h3 className="dev__heading">{Languages[lang].dev.dev__heading}</h3>
                    <p className="dev__text">{Languages[lang].dev.dev__text}</p>

                    <br/>
                    <br/>
                    <br/>

                    <div className="dev__buttons">
                        <button className="dev__button1">
                        {Languages[lang].dev.dev__button}
                        </button>

                        <button className="dev__button2">
                        {Languages[lang].dev.dev__button1}
                        </button>
                    </div>
                </div>

                <picture data-aos="fade-up">
                    <img  src={Code} alt="Code" width={590} height={472}/>
                </picture>
            </div>
        </section>
        </>
    )
}

export default Dev;
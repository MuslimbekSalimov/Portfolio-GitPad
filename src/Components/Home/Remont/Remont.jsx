import "./Remont.scss";
import Remond from "../img/Code1.png";
import React from "react";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";
import Chrome from "../img/Chrome.png";
import Firefox from "../img/Firefox.png";
import Languages from "../../Hooks/Localization";
import { Context as ContextProvider } from "../../Context/Localization";

function Remont() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    const {lang} = React.useContext(ContextProvider)

    return (
        <>

        <section className="remont" data-aos="zoom-in">
            <div className="container">
                <div className="remont__info">
                    <h4 className="remont__heading">{Languages[lang].remont.remont__heading}</h4>

                    <picture>
                        <img className="remond__img" src={Remond} alt="Remond" width={1269} height={821}/>
                    </picture>

                    <p className="remont__text">{Languages[lang].remont.remont__text}<br/> {Languages[lang].remont.remont__text1}<br/> {Languages[lang].remont.remont__text2}</p>

                    <div className="remont__button--div">
                        <button className="remont__button1">
                            <img src={Chrome} alt="Chrome" width={24} height={24}/>
                            {Languages[lang].remont.remont__button}
                        </button>

                        <button className="remont__button2">
                            <img src={Firefox} alt="Chrome" width={24} height={24}/>
                            {Languages[lang].remont.remont__button1}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Remont;
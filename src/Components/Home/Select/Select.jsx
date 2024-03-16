import "./Select.scss"
import "aos/dist/aos.css"
import React, { lazy, useEffect } from "react";
import Aos from "aos";
import { Context as ContextProvider } from "../../Context/Localization";
import Languages from "../../Hooks/Localization";

function Select() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    const {lang} = React.useContext(ContextProvider)
    return (
        <>
        <section className="select" data-aos="zoom-in">
            <div className="container">
                <div className="select__info">
                    <h2 className="select__heading">{Languages[lang].select.select__heading}</h2>

                    <h3 className="select__h3">{Languages[lang].select.select__h3}</h3>

                    <h2 className="select__heading">{Languages[lang].select.select__headin1}</h2>
                </div>
            </div>
        </section>
        </>
    )
}

export default Select;
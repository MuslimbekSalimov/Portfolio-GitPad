import "./Header.scss"
import Logo from "../Home/img/Logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import useTheme from "../Hooks/Theme";
import { Context as ContextProvider } from "../Context/Localization";
import Languages from "../Hooks/Localization";
import React from "react";

function Header() {

    const [theme, setheme] = useTheme()

    const { lang, setlang} = React.useContext(ContextProvider)

    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__info">
                    <Link href="#Logo" to={"home"}>
                        <img className="header__logo" src={Logo} alt="Logo" width={131} height={41}/>
                    </Link>

                    <nav className="list">
                        <li className="item">
                            <a className="link" href="#Features">{Languages[lang].menu.menu__link1}</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">{Languages[lang].menu.menu__link2}</a>
                        </li>

                        <li className="item">
                            <a className="link" href="fut">{Languages[lang].menu.menu__link3}</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">{Languages[lang].menu.menu__link4}</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">{Languages[lang].menu.menu__link5}</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#Features">{Languages[lang].menu.menu__link6}</a>
                        </li>
                    </nav>

                    <select value={theme} onChange={(evt) => setheme(evt.target.value)}>
                        <option value="light">Dark</option>
                        <option value="dark">Light</option>
                    </select>
                    
                    <select value={lang} onChange={(evt) => setlang(evt.target.value)}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                    
                    {/* <button className="btn btn-dark rounded-3"> */}
                    <div className="sign__in">
                       <SignedOut>
                      <SignInButton />
                       </SignedOut>
                      <SignedIn>
                       <UserButton />
                      </SignedIn>
                      </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
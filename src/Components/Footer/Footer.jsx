import "./Footer.scss";
import Logo from '../Home/img/logos.png';
import Twitter from "../Home/img/Twitter.png";
import GitHub from "../Home/img/GitHubYellow.png";
import Message from "../Home/img/Message.png";

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer__info">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <strong className="footer__strong">Gitpod</strong>
                            <p className="footer__text">Home</p>
                            <p className="footer__text">Features</p>
                            <p className="footer__text">Pricing</p>
                            <p className="footer__text">Changelog</p>
                            <p className="footer__text">Self-Hosted</p>
                            <p className="footer__text">Gitpod vs GitHub</p>
                            <p className="footer__text">Codespaces</p>
                            <p className="footer__text">Status</p>

                        </li>

                        <li className="footer__item">
                            <strong className="footer__strong">Developer</strong>
                            <p className="footer__text">Getting started</p>
                            <p className="footer__text">Screencasts</p>
                            <p className="footer__text">Blog</p>
                            <p className="footer__text">Documentation</p>
                            <p className="footer__text">Report a bug</p>
                            <p className="footer__text">Community</p>
                        </li>

                        <li className="footer__item">
                            <strong className="footer__strong">Company</strong>
                            <p className="footer__text">About</p>
                            <p className="footer__text">Careers</p>
                            <p className="footer__text">Contact</p>
                            <p className="footer__text">Media Kit</p>
                        </li>

                        <li className="footer__item">
                            <strong className="footer__strong">Legal</strong>
                            <p className="footer__text">Imprint</p>
                            <p className="footer__text">Terms of Service</p>
                            <p className="footer__text">Privacy Policy</p>
                        </li>
                    </ul>

                    <hr className="line" width={852}/>

                    <div className="    ">
                        <div className="ff__div">
                           <img className="footer__img" src={Logo} alt="Logo" />
                           <span className="footer__span">Copyright © 2021 Gitpod</span>
                        </div>

                        <div className="img__div">
                            <img src={Twitter} alt="Twitter" />
                            <img src={GitHub} alt="GitHub" />
                            <img src={Message} alt="Message" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;
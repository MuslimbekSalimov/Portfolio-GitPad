import "./Home.scss"
import Hero from "./Hero/Hero";
// import Header from "../Header/Header";
import Select from "./Select/Select";
import  Dev from "./Dev/Dev";
import Remont from "./Remont/Remont";
import Use from "./Use/Use";
import Connect from "./Connect/Connect";
// import Footer from "../Footer/Footer";

function Home() {
    return (
        <div className="container">
            {/* <Header/> */}
            <Hero/>
            <Select/>
            <Dev/>
            <Remont/>
            <Use/>
            <Connect/>
            {/* <Footer/>/ */}
        </div>
    )
}

export default Home;
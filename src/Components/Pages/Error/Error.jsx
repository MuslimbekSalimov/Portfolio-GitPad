import "./Error.scss"
import Errorr from "./download.png"

function Error() {
    return(
        <>
        <div className="container text">
            <h3>It's Page </h3>
            <h1>Not Found</h1>
            <img src={Errorr} alt="{Languages[lang].connect.connect__h5}" />
        </div>
        </>
    )
}

export default Error;
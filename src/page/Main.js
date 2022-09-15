import { Link } from "react-router-dom";
import "../css/Main.css"
const Main = () => {
    return (
        <div className="container">
            <div class="welcomeBanner">
                <h1>Welcome to the Mindful App</h1>
            </div>
            <div className="containerOptions">
                <Link to={"/breathe"} style={{ textDecoration: "none" }}>
                    <div className="box">
                        <p>Breathe</p>
                    </div>
                </Link>
                <Link to={"/selfHelp"} style={{ textDecoration: "none" }}>
                    <div className="box">
                        <p>Mood Score</p>
                    </div>
                </Link>
                <Link to={"/knowYourEmotions"} style={{ textDecoration: "none" }}>
                    <div className="box">
                        <p>Know your emotions</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Main;
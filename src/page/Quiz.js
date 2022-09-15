import "../css/Quiz.css"
import "../css/Meter.css"
import data from "../data/data"
import { useRef, useState } from "react";
const Quiz = () => {
    const [Counter, setCounter] = useState(0);
    const divEl = useRef(null);
    var rangeMeter = document.querySelector('#range');
    var rangeShow = document.querySelector("#show");
    var rangeClock = document.querySelector('.meter-clock');
    const [showResult, setShowResult] = useState(false);
    const [showQuestions, setShowQuestions] = useState(true);
    const [finalResult, setFinalResult] = useState(0);
    const [bucket, setBucket] = useState([]);
    function rangeChange() {
        console.log("change" + Counter)
        setShowQuestions(false);
        setShowResult(true);
        var rotateClock = Math.floor((Counter / 18) * 100);
        rangeClock.style.transform = 'rotate(' + (-90 + rotateClock * 180 / 100) + 'deg)';
        rangeShow.value = rotateClock + '%';
        setFinalResult(rotateClock);
    }
    const handleChange = (value) => {
        setCounter(Counter + 1)
        setBucket([...bucket, value])
    }
    const nextSlide = () => {
        setSlide(slide + 1)
    }
    const previousSlide = () => {
        setSlide(slide - 1)
    }
    const [slide, setSlide] = useState(0);
    const QuizBox = () => {
        return (
            <div className="selfHelpQuestions">
                <div className="heading">
                    <p>{data[slide].sectionHeading}</p>
                </div>
                <div className="optionsBox">
                    {data[slide].options.map((inner, key) => {
                        return (
                            <div ref={divEl} className={bucket.includes(inner) ? "selected" : "options"} onClick={(event) => handleChange(inner)} key={key}>
                                <p>{inner}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            {showQuestions === true ? <div className="selfHelpQuestions">
                <div className="welcomeBanner">
                    <h1>Pick Activities to Rejuvenate Your</h1>
                </div>
                <QuizBox />
                <div className="navigation">
                    {slide != 0 ? <p onClick={previousSlide}>Previous</p> : ""}
                    {slide != 2 ? <p onClick={nextSlide}>Next</p> : ""}
                </div>
                {slide == 2 ? <div className="submit" onClick={rangeChange}>
                    <p>Submit</p>
                </div> : ""}

            </div> : ""}

            <div className="wrapper">
                <div className="rang">
                    <div className="rang-title">
                        <p style={{ fontSize: "2rem " }}>Mood score</p>
                        <input className="rang-number" id="show" type="text" value={finalResult + "%"} disabled="disabled" />
                    </div>
                    <svg className="meter">
                        <circle className="meter-left" r="96" cx="135" cy="142"></circle>
                        <circle className="meter-center" r="96" cx="136" cy="142"></circle>
                        <circle className="meter-right" r="96" cx="138" cy="142"></circle>
                        <polygon className="meter-clock" points="129,145 137,90 145,145"></polygon>
                        <circle className="meter-circle" r="10" cx="137" cy="145"></circle>
                    </svg>
                </div>
                {finalResult > 0 && finalResult < 25 ? <p>Even if you are not feeling it, you are already making progress</p> : ""}
                {finalResult >= 25 && finalResult < 50 ? <p>Your journey to mindfulness is going strong. Keep it up.</p> : ""}
                {finalResult >= 51 && finalResult < 75 ? <p>You are doing great for yourself</p> : ""}
                {finalResult >= 76 && finalResult < 90 ? <p>You've come a long way , cheers to you</p> : ""}
                {finalResult >= 91 && finalResult < 100 ? <p>You've come a long way , cheers to you</p> : ""}
            </div>
        </div >
    )
}
export default Quiz;
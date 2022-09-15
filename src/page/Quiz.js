import "../css/Quiz.css"
const Quiz = () => {
    return (
        <div className="container">
            <div className="welcomeBanner">
                <h1>Self Help</h1>
            </div>
            <div className="selfHelpQuestions">
                <div className="heading">
                    <p>Body</p>
                </div>
                <div className="optionsBox">
                    <div className="options">
                        <p>Walk</p>
                    </div>
                    <div className="options">
                        <p>Adequate sleep</p>
                    </div>
                    <div className="options">
                        <p>Healthy meals</p>
                    </div>
                    <div className="options">
                        <p>Medicine taken</p>
                    </div>
                    <div className="options">
                        <p>Plenty of water</p>
                    </div>
                    <div className="options">
                        <p>Time outside</p>
                    </div>
                    <div className="options">
                        <p>Read a book</p>
                    </div>
                    <div className="options">
                        <p>Wrote Journal</p>
                    </div>
                </div>
                <div class="navigation">
                    <p>Previous</p>
                    <p>Next</p>
                </div>
            </div>

        </div>

    )
}
export default Quiz;
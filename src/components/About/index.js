import "./index.scss";

const About = () => {
    return (
        <>
            <div className="container about-page">
                <div className="about-text">
                    <h1>
                        About Me
                    </h1>
                    <h2>
                        <p>
                            My Name is Mike Damiano, and I am an aspiring Software Engineer studying
                            at the University of Florida. My passions include working with <span className="special">
                            React</span>, <span className="special">JavaScript/JSX</span>, <span className="special">
                            CSS</span>, <span className="special">HTML</span>, and <span 
                            className="special">C++</span> to develop modern web applications. 
                        </p>
                        <p>
                            This website is a demonstration of my work and passions for modern development.
                            For employment opportunities and questions, please reach out to my LinkedIn 
                            attached on the sidebar.
                        </p>
                    </h2>

                </div>

                <div className="footer">
                    <p>@SpotifyDeveloped - This website is not related to Spotify AB or any of it's partners/associates in any way.</p>
                </div>

                <div className="thank"></div>

            </div>
        </>
    )
}

export default About;
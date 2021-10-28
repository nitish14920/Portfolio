import { Link } from "react-router-dom";
import { HomeDiv } from "../../Styles/Homestyles";

export function Home(){

    return(
        <HomeDiv>
            <div className="linksContainerHome">
                <a target="_blank" rel="noreferrer" href="./nitish_nj2_152.pdf">Resume</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/nitish14920"><img id="githubImg" src="./GitHub-Mark-Light-32px.png" alt="" /> <p>Github</p></a>
            </div>
            <div className="details">
                <span>Full Stack Developer</span>
                <h1>Hi I'm Nitish Kumar.</h1>
                <p>It's nice to meet you. I design and code <br />
                beautifully and I love what I do.
                </p>
                <Link to="../Contact/contact">LET'S CONNECT!</Link>
            </div>
            <div className="profilePhoto">
                <img  src="../../../../ResumeImage.png" alt="" />
            </div>
        </HomeDiv>
    )
}
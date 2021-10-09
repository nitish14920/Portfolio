import { HomeDiv } from "../../Styles/Homestyles";

export function Home(){

    return(
        <HomeDiv>
            <div className="details">
                <span>Full Stack Developer</span>
                <h1>Hi I'm Nitish Kumar.</h1>
                <p>It's nice to meet you. I design and code <br />
                beautifully and I love what I do.
                </p>
                <a href="">LET'S CHAT!</a>
            </div>
            <div className="profilePhoto">
                <img src="../../../../ResumeImage.png" alt="" />
            </div>
        </HomeDiv>
    )
}
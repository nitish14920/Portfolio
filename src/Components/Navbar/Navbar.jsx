import { NavDiv } from "../../Styles/NavbarStyles";

export function Navbar(){

    return (
        <NavDiv>
            <div className="logoContainer">
                <h1>Nitish</h1>
                <h1>Kumar</h1>
            </div>
            <div className="menuContainer">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
            <div className="linksContainer">
                <a>Resume</a>
                <a><img src="../../../GitHub-Mark-Light-32px.png" alt="" /> <span>Github</span></a>
            </div>
        </NavDiv>
    )
}
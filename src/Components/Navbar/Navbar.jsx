import { NavDiv } from "../../Styles/NavbarStyles";
import { Link } from "react-router-dom";
export function Navbar(){

    return (
        <NavDiv>
            <div className="logoContainer">
                <h1>Nitish</h1>
                <h1>Kumar</h1>
            </div>
            <div className="menuContainer">
                <Link to="/"><span >Home</span></Link>
                <Link to="/about"><span >About</span></Link>
                <Link to="/projects"><span >Projects</span></Link>
                <Link to="/contact"><span >Contact</span></Link>
            </div>
            <div className="linksContainer">
                <a href="./nitish_nj2_152.pdf"><button>Resume</button></a>
                <button><img src="./GitHub-Mark-Light-32px.png" alt="" /> <p>Github</p></button>
            </div>
        </NavDiv>
    )
}
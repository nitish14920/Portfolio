import { NavDiv } from "../../Styles/NavbarStyles";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { useState } from "react";
export function Navbar(){
    const [isopen,setIsopen] = useState(false)

    const burgerClick = ()=>{
        isopen ? setIsopen(false):setIsopen(true)
    }
    const menuClick = (e)=>{
        const div = document.getElementById("menuContainerId")
        div.style.display="block"
    }
    return (
        <NavDiv>
            <div className="logoContainer">
                <h1>Nitish</h1>
                <h1>Kumar</h1>
            </div>
            <div className="menuContainer" id="menuContainerId">
                <Link to="/"><span >Home</span></Link>
                <Link to="/about"><span >About</span></Link>
                <Link to="/projects"><span >Projects</span></Link>
                <Link to="/contact"><span >Contact</span></Link>
            </div>
            <div className="linksContainer">
                <a href="./nitish_nj2_152.pdf">Resume</a>
                <a href="https://github.com/nitish14920"><img id="githubImg" src="./GitHub-Mark-Light-32px.png" alt="" /> <p>Github</p></a>
            </div>
            <button onClick={burgerClick} className="menuIcon">
            <Menu  right isOpen={isopen} className="burgerMenu">
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="about" className="menu-item" to="/about">About</Link>
                <Link id="projects" className="menu-item" to="/projects">Projects</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
            </Menu>
             </button>

            
            
              
            
            
        </NavDiv>
    )
}
import { AbtMe } from "../../Styles/AboutMeStyles"
import { Skill } from "./Skill"
export function AboutMe(){

    return (
        <AbtMe>
            <div className="details">
            <h1>About Me</h1>
            <div>
                <p>"Creativity is Intelligence having Fun...!"</p>
                <h6>Passionate web developer with the ability to write efficient
codes using the MERN stack. <br /> Having built several projects
in this field, <br /> I am seeking an opportunity to grow and learn
from other experienced team members.</h6>
            </div>

            </div>
            <h1>Skills</h1>
            <div className="skills">
                <Skill url='../../../Logos/javascript.png' title="JavaScript"></Skill>
                <Skill url='../../../Logos/css.png' title="CSS"></Skill>
                <Skill url='../../../Logos/html.png' title="HTML"></Skill>
                <Skill url='../../../Logos/react.png' title="ReactJS"></Skill>
                <Skill url='../../../Logos/mysql.png' title="MySQL"></Skill>
                <Skill url='../../../Logos/mongodb.png' title="MongoDB"></Skill>
                <Skill url='../../../Logos/express.png' title="Express"></Skill>
                <Skill url='../../../Logos/nodejs.png' title="NodeJS"></Skill>
                <Skill url='../../../Logos/redux.png' title="Redux"></Skill>
            </div>
            <h1>Tools</h1>
            <div className="skills">
                <Skill url='../../../Logos/material.png' title="Material UI"></Skill>
                <Skill url='../../../Logos/firebase.png' title="Firebase"></Skill>
                <Skill url='../../../Logos/styled.png' title="Styled-Components"></Skill>
                <Skill url='../../../Logos/mongoose.png' title="Mongoose"></Skill>
                
            </div>
        </AbtMe>
    )
}
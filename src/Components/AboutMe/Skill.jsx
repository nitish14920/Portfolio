import { SkillDiv } from "../../Styles/SkillDiv"
export function Skill({url,title}){

    return (
        <SkillDiv className="skill">
            <img src={url} alt="img" />
            <h6>{title}</h6>
        </SkillDiv>
    )
}
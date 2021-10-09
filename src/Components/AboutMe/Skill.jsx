import { SkillDiv } from "../../Styles/SkillDiv"
export function Skill({url,title}){

    return (
        <SkillDiv className="skill">
            <img src={url} alt="img" />
            <h4>{title}</h4>
        </SkillDiv>
    )
}
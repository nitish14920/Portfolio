import { ProjectContainer } from "../../Styles/ProjectContainer";
import Modal from "react-modal"
import { useState } from "react";
import { ModalDiv } from "../../Styles/ModalDivStyles";
import { Skill } from "../AboutMe/Skill";
export function Project({data}){
    const [p1,setP1] = useState(false)
    console.log(data)
    return (
        <>
        <ProjectContainer onClick={()=>{
            setP1(true)
        }}>
            <img src={data.url} alt="" />
            <div className="details">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            </div>
            
        </ProjectContainer>
        <Modal isOpen={p1} style={{content:{width:"70vw", margin:"auto",backgroundColor:"#2d2e32"}}}>
        <ModalDiv className="modaldiv">
            <button onClick={()=>{
                setP1(false)
            }}>X</button>
            <img id="projectImg" src={data.url} alt="" />
            <div className="details">
                <div className="left">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <h2>Features</h2>
                {
                    data.features.map((el)=><p>{el}</p>)
                }
                <h2>Areas Of Responsibility</h2>
                {
                    data.responsibility.map((el)=> <p>{el}</p>)
                }
                </div>
                <div className="right">
                    <h2>Tech Stack</h2>
                    <div className="techstack">
                        {
                            data.skills.map((el)=><Skill  title={el.title} url={el.url}></Skill>)
                        }
                    </div>
                </div>
                
            </div>
            
        </ModalDiv>
    </Modal>
 </> 
    )
}
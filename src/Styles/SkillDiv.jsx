import styled from "styled-components";

export const SkillDiv = styled.div`

height: 18vh;
width: 16vh;
border-radius: 10px;
background-color: rgb(66, 66, 68);
margin: 10px;
& img{
    height: 40%;
    margin-top: 10%;
}
@media(max-width:768px){
    width: 12vh;
    height: 15vh;
}

`
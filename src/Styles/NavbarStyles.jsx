import styled from "styled-components";

export const NavDiv = styled.div`
display: flex;
background-color:#2d2e32;
height: 8vh;
padding: 1vh 2vh;
& .logoContainer{
    display: flex;
    margin-left: 4%;
    line-height: 120%;
    & :nth-child(2){
        margin-left: 10px;
        font-weight: 200; 
    }
}

& .menuContainer{
    margin-left: 10%; 
    height: 8vh;
    width: 40vw;
    margin-top: 1%;
    
    &  a{
        color: #e4e6eb;
        padding-left:10%;
        line-height: 125%;
        font-size: 20px;
        text-decoration:none
    }
}
& .linksContainer{
    display: flex;
    margin-top: 15px;
    margin-left: 5%;
    &  button{
        height: 60%;
        width: 150px;
        margin-left: 2%;
        line-height: 1.5;
        font-size: 20px;
        background-color:#64f4ac ;
        border: none;
        border-radius: 4px;
        color: #2d2e32;
    }
    & :nth-child(2){
        background-color:#2d2e32 ;
        color:#e4e6eb ;
        line-height: .5;
        display: flex;
        margin-left: 10px;
        & >p{
            line-height:0;
            margin-left: 5px;
        }
        & > img{
            height: 25px;
            margin-top: 5px;
        }
    }
}
`
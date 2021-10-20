import styled from "styled-components";

export const HomeDiv = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: rgb(45, 46, 50);

& .details{
    text-align: left;
    margin-left: 8%;
    margin-top: 10%;
    margin: auto;
    & > span{
        background-color:#64f4ac ;
        color: rgb(45, 46, 50);
        padding: 10px;
        border-radius: 3px;
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 1rem;
    }
    & >h1{
        margin: 60px 0px;
        font-size: 3rem;
    }
    & >p{
        margin-bottom: 80px;
        color: #a1a3a8;
        letter-spacing: 2px;
    }
    & >a{
        color: #64f4ac;
        font-size: 2rem;
        letter-spacing: 1px;
        
    }
}
& .profilePhoto{
    
   margin-right: 4%;
   margin-top: 5%;
    
}
@media(max-width:768px){
    .profilePhoto{
        display: none;
        position: absolute;
        top: 0px;
        left: 10%;
        
    }
    & .details{
    text-align: center;
    /* margin-left: 8%; */
    
    }
    
}
`
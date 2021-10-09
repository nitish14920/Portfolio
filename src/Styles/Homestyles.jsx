import styled from "styled-components";

export const HomeDiv = styled.div`
display: flex;
height: 100vh;
background-color: rgb(45, 46, 50);

& .details{
    text-align: left;
    margin-left: 15%;
    margin-top: 10%;
    & > span{
        background-color:#64f4ac ;
        color: rgb(45, 46, 50);
        padding: 10px;
        border-radius: 3px;
        font-weight: 600;
        letter-spacing: 2px;
    }
    & >h1{
        margin: 60px 0px;
        font-size: 50px;
    }
    & >p{
        margin-bottom: 80px;
        color: #a1a3a8;
        letter-spacing: 2px;
    }
    & >a{
        color: #64f4ac;
        font-size: 25px;
        letter-spacing: 1px;
        
    }
}
& .profilePhoto{
    margin-left: 5%;
    margin-top: 10%;
}
`
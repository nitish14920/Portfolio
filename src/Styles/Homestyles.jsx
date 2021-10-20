import styled from "styled-components";

export const HomeDiv = styled.div`
display: flex;
height: 100vh;

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
& .linksContainerHome{
    display: none;
}
& .profilePhoto{
    
   margin-right: 6%;
   margin-top: 5%;
    
}
@media(max-width:768px){
    flex-direction: column-reverse;
    .profilePhoto{
        //display: none;
        margin: auto;
        margin-bottom: 10%;
        & img{
            height: 250px;
        }
        
    }
    & .details{
    text-align: center;
    /* margin-left: 8%; */
    
    }
    .linksContainerHome{
    display: flex;
    margin-top: 10%;
    margin-left: 25%;
    height: 100%;
    &  a{
        height: 10%;
        width: 150px;
        
        line-height: 2;
        font-size: 1.8rem;
        background-color:#64f4ac ;
        border: none;
        border-radius: 4px;
        color: #2d2e32;
    }
    & >:nth-child(2){
        background-color:#2d2e32 ;
        color:#e4e6eb ;
        line-height: .8;
        display: flex;
        margin-left: 15%;
        cursor: pointer;
        & >p{
            line-height:.8;
            margin-left: 15px;
        }
        & > img{
            height: 30px;
            margin-top: 5px;
        }
    }
    & a{
        text-decoration: none;
        cursor: pointer;
    }
    
}
    
}
`
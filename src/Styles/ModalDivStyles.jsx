import styled from "styled-components";

export const ModalDiv = styled.div`
color: #e4e6eb ;
& h1,h3,h4,p{
    margin: 0px;
}
& > img{
    height: 46vh;
    margin-left:10px;
    border-radius: 5px;
    width: 98%;
}
& button{
    height: 10%;
    margin-left: 99%;
    margin-top: -99%;
    background-color:#35CE8D ;
}
& .details{
    display: flex;
    height: 55vh;
    width: 100%;
    & > div{
        margin: 10px;
    }
    
    & .left{
        width: 60%;
    }
    & .right{
        width: 40%;
    }
}
& .techstack{
    display: flex;
    flex-wrap: wrap;
    height:60%;
    width: 100%;
    & > div {
        height: 40%;
        width: 25%;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
    & > div > img{
        height: 40%;
        margin: auto;
    }
    
    & >div>h4{
        text-align: center;
    }
}
@media(max-width:768px){
    #projectImg{
        
    }
    color: #e4e6eb ;
    
& h1,h3,h4,p{
    margin: 0px;
}
& > img{
    height: 25vw;
    margin-left:10px;
    border-radius: 5px;
    width: 98%;
}
& button{
    position: relative;
    bottom: 10px;
    right: 10px;
    background-color:#35CE8D ;
}
& .details{
    display: flex;
    height: 55vh;
    width: 100%;
    & > div{
        margin: 10px;
    }
    
    & .left{
        width: 60%;
        & h2{
            font-size: 1.5rem;
        }
        & p{
            font-size: 1.2rem;
        }
    }
    & .right{
        width: 40%;
    }
}
& .techstack{
    height:60%;
    width: 100%;
    & > div {
        height: 70px;
        width: 55px;
        font-size:1rem;
        
    }
    & > div > img{
        height: 45%;
        margin: auto;
    }
    
    & >div>h4{
        text-align: center;
    }
}
}

`
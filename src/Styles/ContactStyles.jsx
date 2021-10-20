import styled from "styled-components";

export const ContactDiv = styled.div`
height: 100vh;
display: flex;
justify-content: center;
text-align: left;
& .left{
    margin-left:2%;
    margin-top: 10%;
    & button{
            width: 180px;
            height: 40px;
            background-color: #64f4ac;
            border: none;
            border-radius: 10px;
            margin-top: 50px;
    }
}
& .right{
    text-align: left;
    width: 40%;
    padding: 2%;
    & h2 , p{
        margin-top: 5%;
    }
    & form{
        display: flex;
        flex-direction: column;
        border: 1px solid #64f4ac ;
        height: 50%;
        justify-content: space-around;
        border-radius: 5px;
        margin-top: 80px;
        & input{
            height: 50px;
            background: none;
            border: none;
            border-bottom: 1px solid #64f4ac;
            margin: 0px 30px;
        }
        & button{
            width: 100px;
            height: 40px;
            background-color: #64f4ac;
            border: none;
            border-radius: 10px;
            margin: 3% 5%;
        }
    }
}
& .links{
    margin-top: 120px;
    display: flex;
    justify-content: space-around;
    button{
        height: 40px;
        width: 120px;
        cursor: pointer;
        border-radius: 10px;
        background: none;
        font-size: 15px;
        color: #e4e6eb;;
        & i{
            margin-right: 10px;
            color: #e4e6eb;
        }
    }
    
}
@media(max-width:768px){
    height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
& .left{
    width: 90%;
    margin: auto;
    margin-top: 10vh;
    margin-bottom: 5vh;
    text-align: center;
    & button{
            width: 25vw;
            height: 7vw;
            font-size: 1.2rem;
            margin-top: 5%;
            color: white;
    }
}
& .right{
    text-align: left;
    width: 55%;
    padding: 2%;
    margin:auto;
    & h2 , p{
        margin-top: 5%;
        font-size: 1.3rem;
    }
    & form{
        
        height: 55%;
        width: 55vw;
        justify-content: space-around;
        border-radius: 5px;
        margin-top: 10%;
        & input{
            height: 50px;
            background: none;
            border: none;
            border-bottom: 1px solid #64f4ac;
            margin: 0px 30px;
        }
        & button{
            width: 70px;
            height: 30px;
            background-color: #64f4ac;
            border: none;
            border-radius: 10px;
            margin: 5% 12%;
            color: white;
        }
    }
}
& .links{
    margin-top: 20%;
    display: flex;
    justify-content: space-around;
    button{
        height: 30px;
        width: 100px;
        cursor: pointer;
        border-radius: 10px;
        background: none;
        font-size: 1rem;
        color: #e4e6eb;;
        & i{
            margin-right: 10px;
            color: #e4e6eb;
        }
    }
    
}
}
`
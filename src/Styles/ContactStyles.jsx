import styled from "styled-components";

export const ContactDiv = styled.div`
height: 100vh;
display: flex;
justify-content: center;
text-align: left;
& .left{
    margin-right:150px;
    margin-top: 150px;
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
    width: 500px;
    padding: 40px;
    & h2 , p{
        margin-top: 30px;
    }
    & form{
        display: flex;
        flex-direction: column;
        border: 1px solid #64f4ac ;
        height: 400px;
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
            margin-left: 370px;
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
`
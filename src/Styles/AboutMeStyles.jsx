import styled from "styled-components";

export const AbtMe = styled.div`
height: 100%;
& .details > div > h6{
    font-size:1.3rem;
    padding: 30px;
}
& .details > h1{
    margin-top: 40px;
}
& .skills{
    display: flex;
    flex-wrap: wrap;
    width: 70vw;
    margin: auto;
    justify-content: center;
    padding: 30px;
    & div{
        width: 7vw;
        height: 8vw;
        font-size: 1rem;
        padding: 10px;
    }
    
}
@media(max-width:768px){
    word-spacing: 0px;
    & .details > div > h6{
    font-size:1.4rem;
    padding: 30px;
    }
    & .details >div >p{
        font-size: 1.2rem;
    }
    & .skills > div{
        height: 120px;
        width: 120px;
        & > h6{
            font-size: 1rem;
            padding: 10px;
            margin-top: 0px;
        }
        & > img{
            margin-top: 20px;
        }
    }
}
@media(max-width:400px){
    word-spacing: 0px;
    
    & .details > div > h6{
    font-size:1.2rem;
    padding: 30px;
    }
    & .details >div >p{
        font-size: 1rem;
    }
    & .skills{
        width: 350px;
        padding: 10px;
    }
    & .skills > div{
        height: 70px;
        width: 80px;
        & > h6{
            font-size: .7rem;
            padding: 10px;
            margin-top: 0px;
        }
        & > img{
            margin-top: 10px;
        }
    }
}
`
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
}
& button{
    height: 10%;
    margin-left: 99%;
}
& .details{
    display: flex;
    & > div{
        margin: 10px;
    }
    & .right{
        margin-left: 100px;
    }
}
& .techstack{
    display: flex;
    flex-wrap: wrap;
    height:60%;
    & >div{
        height: 45%;
        width: 20%;
    }
    & img{
        height: 60px;
        margin-left: 15px;
        
    }
    
    & >div>h4{
        text-align: center;
    }
}
`
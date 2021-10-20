import styled from "styled-components";

export const HomeDiv = styled.div`
display: flex;
height: 100vh;

background-color: rgb(45, 46, 50);

& .details{
    text-align: left;
    margin: auto;
    margin-left: 4%;
    margin-top: 12%;
    & > span{
        background-color:#64f4ac ;
        color: rgb(45, 46, 50);
        padding: .8rem;
        border-radius: 3px;
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 1rem;
    }
    & >h1{
        margin: 5% 0px;
        font-size: 3rem;
    }
    & >p{
        margin-bottom: 10%;
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
   margin-top: 10%;
    
}
@media(max-width:768px){
    flex-direction: column-reverse;
    .profilePhoto{
        //display: none;
        margin: auto;
        margin-bottom: 10%;
        margin-top: 10%;
        & img{
            height: 250px;
        }
        
    }
    & .details{
    text-align: center;
    /* margin-left: 8%; */
        & p{
            font-size: 1.2rem;
        }
    
    }
    .linksContainerHome{
    display: flex;
    margin-top: 10%;
    margin-left: 20%;
    height: 100%;
    &  a{
        height: 2.5rem;
        width: 8rem;
        
        line-height: 1.8;
        font-size: 1.3rem;
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
            line-height:0;
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
@media(max-width:400px){
    flex-direction: column-reverse;
    .profilePhoto{
        //display: none;
        margin: auto;
        
        
        & img{
            margin-top: 23px;
            height: 170px;
        }
        
    }
    .linksContainerHome{
    display: flex;
    margin-top: 10%;
    margin-left: 20%;
    height: 100%;
    &  a{
        height: 2.5rem;
        width: 8rem;
        
        line-height: 1.8;
        font-size: 1.3rem;
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
            line-height:0;
            margin-left: 15px;
        }
        & > img{
            height: 20px;
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
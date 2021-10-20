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
& #menuIcon{
    position: absolute;
    top: 2%;
    right: 2%;
    font-size:2rem;
    display: none;
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
        font-size: 1.3rem;
        text-decoration:none
    }
}
& .linksContainer{
    display: flex;
    margin-top: 15px;
    margin-left: 10%;
    &  button{
        height: 60%;
        width: 150px;
        
        line-height: 1.5;
        font-size: 1rem;
        background-color:#64f4ac ;
        border: none;
        border-radius: 4px;
        color: #2d2e32;
    }
    & :nth-child(2)>button{
        background-color:#2d2e32 ;
        color:#e4e6eb ;
        line-height: .5;
        display: flex;
        margin-left: 15%;
        cursor: pointer;
        & >p{
            line-height:0;
            margin-left: 5px;
        }
        & > img{
            height: 25px;
            margin-top: 5px;
        }
    }
    & a{
        text-decoration: none;
        cursor: pointer;
    }
}
@media(max-width:1300px){
    .menuContainer{
    margin-left: 3%;
}
} 
@media(max-width:768px){
  .logoContainer{
 margin: auto;
 
}
.menuContainer{
    display: none;
    flex-direction: column;
    position: absolute;
    top: 10%;
    left: 28vw;
    &  a{
        padding: 10%;
        display: block;
    }
}
.linksContainer{
    display: none;
    position: absolute;
    bottom: 0%;
    left: 30%;
    margin: auto;
    &  button{
        height: 80%;
        width: 100px;
        
        line-height: 1.5;
        font-size: 1.3rem;
        background-color:#64f4ac ;
        border: none;
        border-radius: 4px;
        color: #2d2e32;
    }
    & :nth-child(2)>button{
        background-color:#2d2e32 ;
        color:#e4e6eb ;
        line-height: .5;
        display: flex;
        margin-left: 15%;
        cursor: pointer;
        & >p{
            line-height:1;
            margin-left: 5px;
            font-size: 1.6rem;
        }
        #githubImg{
            height: 25px;
            
        }
    }
}

}
`
import styled from 'styled-components'

export const ProjectContainer = styled.div`

width: 40vw;
height: 25vw;
background-color: white;
border-radius: 10px;
cursor: pointer;
margin: 40px;

:hover{
    
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
}

& img{
    
    height: 60%;
    width: 100%;
    border-radius: 10px;
   
}
& h1 , p {
    color: #e4e6eb;
    letter-spacing: 1px;
    padding: 1%;
    margin: 0px;
    font-size: 1rem;
}
& .details{
    background-color: #4a4a4d;
    height: 40%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
}
@media(max-width:768px){
    width: 70%;
    height: 25%;
}
@media(max-width:400px){
    width: 70%;
    height: 25%;
    
    p{
        font-size:.7rem;
    }
}
`
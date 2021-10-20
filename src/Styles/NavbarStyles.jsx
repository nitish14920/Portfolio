import styled from "styled-components";

export const NavDiv = styled.div`
display: flex;
background-color:#2d2e32;
height: 8vh;
padding: 1vh 2vh;
& .logoContainer{
    display: flex;
    margin-left: 2%;
    line-height: 120%;
    & :nth-child(2){
        margin-left: 10px;
        font-weight: 200; 
    }
}


& .menuContainer{
    margin-left: 8%; 
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
    height: 100%;
    &  a{
        height: 60%;
        width: 150px;
        
        line-height: 1.5;
        font-size: 1rem;
        background-color:#64f4ac ;
        border: none;
        border-radius: 4px;
        color: #2d2e32;
    }
    & >:nth-child(2){
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
& .menuIcon{
        
        /* position: absolute;
        top: 1%;
        right: 2%; */
        height: 20px;
        margin-top: 20px;
        display: none;
        background-color:#2d2e32 ;
        border: none;

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
    display: flex;
    flex-direction: column;
  color: #b8b7ad;
  padding: 0.8em;
  justify-content:flex-start;
}

/* Individual item */
.bm-item {
  display: inline-block;
  text-decoration:none;
  color:#64f4ac;
  border: white 1px solid;
  height: 5vh;
  line-height:3;
  margin-bottom: 5vh;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
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
    
}
.menuIcon{
    display: inline;
}
}
`
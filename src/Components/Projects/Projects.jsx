
import { ProjectDiv } from "../../Styles/ProjectsStyles"
import { Project } from "./Project"

import { useState } from "react"
export function Projects(){

    const data = [
        {
            title:"Groww",
            desc:"Groww is an online investment platform that allows investors to invest in mutual funds and stocks.",
            features:[
                "Signin/Signup",
                "Buy Stocks and Mutual Funds",
                "User Authentication",
            ],
            responsibility:[
                "Built the Registration page.",
                "Created the U.S stock page which holds all the stocks related to the U.S",
                "Designed the Gold page which holds all the Gold related investment options",
                "Developed a Profile Page for Users."
            ],
            url:"../../../Groww.png",
            skills:[
                {
                    url:'../../../Logos/css.png',
                    title:"CSS"
                },
                {
                    url:'../../../Logos/html.png',
                    title:"HTML"
                },
                {
                    url:'../../../Logos/javascript.png',
                    title:"JavaScript"
                },
                {
                    url:'../../../Logos/react.png',
                    title:"ReactJS"
                },
                {
                    url:'../../../Logos/express.png',
                    title:"Express"
                },
                {
                    url:'../../../Logos/nodejs.png',
                     title:"NodeJS"
                }
            ]
        },
        {
            title:"Glassdoor",
            desc:"This is the clone of website Glassdoor, which is related to jobs where company can register itself and can post their jobs requirements.",
            features:[
                "Signin/Signup",
                "Compare Companies",
                "Search Jobs",
                "Posting a Job",
                "Register Company"
            ],
            responsibility:[
                "Built the Registration page.",
                "Developed the Frontend and Backend for adding a new Job",
                "Designed the Companies Page"
            ],
            url:"../../../Glassdoor.png",
            skills:[
                {
                    url:'../../../Logos/css.png',
                    title:"CSS"
                },
                {
                    url:'../../../Logos/html.png',
                    title:"HTML"
                },
                {
                    url:'../../../Logos/javascript.png',
                    title:"JavaScript"
                },
                {
                    url:'../../../Logos/react.png',
                    title:"ReactJS"
                }
            ]
        },
        {
            title:"Lovoda",
            desc:"Lovoda is an E-commerce online store which is located in the U.S",
            features:[
                "Signin/Signup",
                "Search Products",
                "Wishlist",
                "Cart",
            ],
            responsibility:[
                "Built the Registration page.",
                "Built Login Modal",
                "Built Account Page",
                "Worked on Wishlist and Cart"
            ],
            url:"../../../Lovoda.png",
            skills:[
                {
                    url:'../../../Logos/css.png',
                    title:"CSS"
                },
                {
                    url:'../../../Logos/html.png',
                    title:"HTML"
                },
                {
                    url:'../../../Logos/javascript.png',
                    title:"JavaScript"
                },
            ]
        }
    ]
    return(

        <ProjectDiv>
            <h1>Projects</h1>
            <div className="projects" style={{height:"100%"}}>
                <Project data = {data[0]}/>
                <Project data = {data[1]}/>
                <Project data = {data[2]}/>
            </div>
            
        </ProjectDiv>
    )
}
import { ContactDiv } from "../../Styles/ContactStyles";

export function Contact(){

    return(
        <ContactDiv>
            <div className="left">
                <h1>Let's make something amazing <br /> together.</h1>
                <h1>Starts by saying hi</h1>
                <a href="../../../nitish_nj2_152.pdf"><button>Download Resume</button></a>
            </div>
            <div className="right">
                 <p>Information</p>
                 <p>Bahadurgarh,Haryana,India</p>
                 <h2>nitish14920@gmail.com</h2>
                 <form action="">
                     <input type="text" name="name" placeholder="Name" />
                     <input type="text" name="email" placeholder="Email" />
                     <input type="text" name="message" placeholder="message"/>
                     <button>SEND</button>
                 </form>
                 <div className="links">
                     <button><i class="fab fa-twitter"></i>Twitter</button>
                     <button><i class="fab fa-linkedin"></i>LinkedIn</button>
                     <button><i class="fab fa-github"></i>Github</button>
                 </div>
            </div>
        </ContactDiv>
    )
}
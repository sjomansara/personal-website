import { Button } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
    return ( 
        <Jumbotron className="ml-5" style={{ backgroundColor: "rgb(47, 47, 47)", color: "rgb(232, 225, 239)", marginTop: "130px"}}>
        <h4>Hi there! <FontAwesomeIcon icon={faHand}/></h4>
        <h1 className="mt-4 mb-3">I'm Sara Sjöman</h1>
        <p>
            I'm a frontend developer who is located in Munich, Germany and <br></br> is passionate about clean and functional design.
        </p>
        <p>
            <Button className="my-4 px-4 badge-pill" variant="outline-primary" style={{ color: "rgb(232, 225, 239)", borderColor: "rgb(232, 225, 239)" }}>Learn more about me</Button>
        </p>
        {/* <p style={{ marginTop: "250px", marginLeft: "600px" }} >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "30px" }}/><FontAwesomeIcon className="ml-3" icon={faGithub} style={{ fontSize: "30px" }}/><FontAwesomeIcon className="ml-3" icon={faEnvelope} style={{ fontSize: "30px" }}/>
        </p> */}
        </Jumbotron>
    )
}

export default Intro
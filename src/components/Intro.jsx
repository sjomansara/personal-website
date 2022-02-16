import { Button, Container } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
    return ( 
        <Container>
        <Jumbotron className="ms-5" style={{ backgroundColor: "rgb(47, 47, 47)", color: "rgb(212, 196, 233)", marginTop: "130px"}}>
        <h4>Hi there! <FontAwesomeIcon icon={faHand}/></h4>
        <h1 className="mt-4 mb-3">I'm <span style={{ fontWeight: "bold" }}>Sara Sjöman</span></h1>
        <p style={{color: "#DFDFE2"}}>
            I'm a frontend developer who is passionate about clean and functional design. <br></br> Located in Munich, Germany.
        </p>
        <p>
            <Link to="/aboutme"><Button className="my-4 px-4 rounded-pill" variant="outline-primary" style={{ color: "rgb(212, 196, 233)", borderColor: "rgb(212, 196, 233)" }}>Learn more about me</Button></Link>
        </p>
        {/* <p style={{ marginTop: "250px", marginLeft: "600px" }} >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "30px" }}/><FontAwesomeIcon className="ml-3" icon={faGithub} style={{ fontSize: "30px" }}/><FontAwesomeIcon className="ml-3" icon={faEnvelope} style={{ fontSize: "30px" }}/>
        </p> */}
        </Jumbotron>
        </Container>
    )
}

export default Intro
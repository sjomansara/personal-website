import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';

const MySkills = () => {
    return (
        <Container>
        <Jumbotron className="ms-5 mb-5" style={{ backgroundColor: "rgb(47, 47, 47)", marginTop: "10rem" }}>
        <h1 className='mb-5'>My Skills</h1>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faJsSquare}/><span style={{color: "#DFDFE2"}}> &nbsp;JavaScript</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faReact}/><span style={{color: "#DFDFE2"}}> React</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faHtml5}/><span style={{color: "#DFDFE2"}}> &nbsp;HTML5</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faCss3Alt}/><span style={{color: "#DFDFE2"}}> &nbsp;CSS3</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faGitAlt}/><span style={{color: "#DFDFE2"}}> Git</span></h4>
        </Jumbotron>
        </Container>
    )
}

export default MySkills
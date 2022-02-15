import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const MySkills = () => {
    return (
        <Jumbotron className="ml-5" style={{ backgroundColor: "rgb(47, 47, 47)", marginTop: "80px" }}>
        <h1 className='mb-5'>My Skills</h1>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faJsSquare}/><span style={{color: "#DFDFE2"}}> JavaScript</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faReact}/><span style={{color: "#DFDFE2"}}>React</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faHtml5}/><span style={{color: "#DFDFE2"}}> HTML5</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faCss3Alt}/><span style={{color: "#DFDFE2"}}> CSS3</span></h4> <br></br>
        <h4 className="hvr-grow"><FontAwesomeIcon className="mr-2" icon={faGitAlt}/><span style={{color: "#DFDFE2"}}>Git</span></h4>
        </Jumbotron>
    )
}

export default MySkills
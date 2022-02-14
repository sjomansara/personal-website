import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const MySkills = () => {
    return (
        <Jumbotron style={{ backgroundColor: "rgb(47, 47, 47)"}}>
        <h1 className='mb-5'>My Skills</h1>
        <h4><FontAwesomeIcon className="mr-2" icon={faJsSquare}/> JavaScript</h4>
        <h4><FontAwesomeIcon className="mr-2" icon={faReact}/> React</h4>
        <h4><FontAwesomeIcon className="mr-2" icon={faHtml5}/> HTML5</h4>
        <h4><FontAwesomeIcon className="mr-2" icon={faCss3Alt}/> CSS3</h4>
        <h4><FontAwesomeIcon className="mr-2" icon={faGitAlt}/> Git</h4>
        </Jumbotron>
    )
}

export default MySkills
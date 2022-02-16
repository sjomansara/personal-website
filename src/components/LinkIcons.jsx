import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap';

const LinkIcons = () => {
  
    return (
    <Row>
        <Col md={2}>
            <a href="https://www.linkedin.com/in/sarasjoeman/" target="_blank" rel="noopener noreferrer" className="my-4 px-4 hvr-grow linkIcon"><FontAwesomeIcon icon={faLinkedin}/></a>
        </Col>
        <Col md={2}>
            <a href="https://github.com/sjomansara" target="_blank" rel="noopener noreferrer" className="my-4 px-4 hvr-grow linkIcon"><FontAwesomeIcon icon={faGithub}/></a>
        </Col>
        <Col md={2}>
            <a href="mailto: sarasjoeman@gmail.com" target="_blank" rel="noopener noreferrer" className="my-4 px-4 hvr-grow linkIcon"><FontAwesomeIcon icon={faEnvelope}/></a>
        </Col>
      </Row>
    );
    }

export default LinkIcons;
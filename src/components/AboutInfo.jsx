import Jumbotron from 'react-bootstrap/Jumbotron';
import { Col, Container, Row } from 'react-bootstrap';
import ResumeButton from './ResumeButton';
import LinkIcons from './LinkIcons';

const AboutInfo = () => {
    return (
        <Container>
        <Jumbotron className="mx-5" style={{ backgroundColor: "rgb(47, 47, 47)", marginTop: "10rem" }}>
        <h1 className='mb-5'>About me</h1>
        <p style={{color: "#DFDFE2"}}>
            I'm Sara, a Finnish frontend developer based in Munich, Germany. I'm passionate about clean and functional design and have a great eye for detail.
        </p>
        <p style={{color: "#DFDFE2"}}>
        Highly motivated self-starter. Able to effectively self-manage during independent projects, as well as collaborate as part of a team.
        </p>
        <Row>
        <Col md={4}>
        <p>
            <ResumeButton />
        </p>
        </Col>
        <Col md={8}>
        <LinkIcons />
        </Col>
        </Row>
        </Jumbotron>
        </Container>
    )
}

export default AboutInfo
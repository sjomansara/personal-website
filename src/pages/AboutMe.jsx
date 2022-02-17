import AboutInfo from "../components/AboutInfo"
import { Col, Container, Row } from "react-bootstrap"
import MySkills from "../components/MySkills"

const AboutMe = () => {
    return (
        <Container>
        <Row>
        <Col md={8}>
        <AboutInfo />
        </Col>
        <Col md={4}>
        <MySkills />
        </Col>
        </Row>
        </Container>
    )
}

export default AboutMe
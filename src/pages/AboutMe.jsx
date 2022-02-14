import MyNavbar from "../components/MyNavbar"
import AboutInfo from "../components/AboutInfo"
import { Col, Row } from "react-bootstrap"

const AboutMe = () => {
    return (
        <div>
        <MyNavbar/>
        <Row>
        <Col md={6} sm={12}>
        <AboutInfo />
        </Col>
        <Col md={6}>
        </Col>
        </Row>
        </div>
    )
}

export default AboutMe
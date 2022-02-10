import MyNavbar from "../components/MyNavbar"
import Intro from "../components/Intro"
import MyPhoto from "../components/MyPhoto"
import { Col, Row } from "react-bootstrap"

const HomePage = () => {
    return (
    <div>
    <MyNavbar/>
    <Row>
    <Col md={7}>
    <Intro />
    </Col>
    <Col md={5}>
    <MyPhoto />
    </Col>
    </Row>
    </div>
    )
}

export default HomePage
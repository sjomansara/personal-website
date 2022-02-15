import Intro from "../components/Intro"
import MyPhoto from "../components/MyPhoto"
import { Col, Row } from "react-bootstrap"

const HomePage = () => {
    return (
    <div>
    <Row>
    <Col md={7} sm={12}>
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
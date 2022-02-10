import MyNavbar from "../components/MyNavbar"
import Intro from "../components/Intro"
import { Col } from "react-bootstrap"

const HomePage = () => {
    return (
    <div>
    <MyNavbar/>
    <Col md={8}>
    <Intro />
    </Col>
    </div>
    )
}

export default HomePage
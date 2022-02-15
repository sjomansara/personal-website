import { Col, Row, Card } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron';

const PortfolioPage = () => {
    return (
        <div>
        <Jumbotron className="ml-5" style={{ backgroundColor: "rgb(47, 47, 47)", height: "5rem" }}>
        <h1 className='ml-3'>My Portfolio</h1>
        </Jumbotron>
        <div className="cardContainer">
        <Row className="mx-5">
            <Col md={3}>
                <Card className="portfolioCard" style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" variant="top" src="https://picsum.photos/100/70" />
                        <Card.Body>
                            <Card.Title><a href="https://github.com/sjomansara/strive-capstoneproject-spotifystats">Spotify Stats App</a></Card.Title>
                        </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard" style={{ width: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src="https://picsum.photos/100/70" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard" style={{ width: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src="https://picsum.photos/100/70" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                    </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard" style={{ width: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src="https://picsum.photos/100/70" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                    </Card>
            </Col>
        </Row>
        </div>
        </div>
    )
}

export default PortfolioPage
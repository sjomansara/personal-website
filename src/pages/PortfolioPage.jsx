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
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/SpotifyStats(8).png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/SpotifyStats(8).png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/SpotifyStats(8).png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/SpotifyStats(8).png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
        </Row>
        </div>
        </div>
    )
}

export default PortfolioPage
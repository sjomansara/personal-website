import { Col, Row, Card, Container } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from "react-bootstrap"
import React from "react";
import { useState } from "react"

const PortfolioPage = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
        <Container>
        <Jumbotron className="ms-5 mt-5" style={{ backgroundColor: "rgb(47, 47, 47)", height: "5rem" }}>
        <h1 className='ml-3'>My Portfolio</h1>
        </Jumbotron>
        </Container>
        <div className="cardContainer">
        <Row className="mx-5">
            <Col md={3}>
                <Card onClick={() => setModalShow(true)} className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
        </Row>
        </div>
            <Modal
              size="lg"
              show={modalShow}
              onHide={() => setModalShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="mb-5"
                    className="d-block w-100"
                    src="/stats1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats3.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
              </Modal.Body>
            </Modal>
            </div>
    )
}

export default PortfolioPage
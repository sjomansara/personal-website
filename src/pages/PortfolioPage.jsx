import { Col, Row, Card, Container, Button } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from "react-bootstrap"
import React from "react";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                <Card onClick={() => setModalShow(true)} className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/stats1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Stats App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
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
            <Modal.Header closeButton><h3 style={{ color: "#7D7D8C" }}>Spotify Stats App</h3></Modal.Header>
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
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats4.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats5.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats6.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats7.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/stats8.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                <p className="mt-4" style={{ color: "#7D7D8C" }}>Built as a capstone project for the Strive School frontend bootcamp, this app allows its users to see their most listened to artists and tracks, recently played tracks and recommended tracks by logging into their account using the Spotify API. The app was independently designed and developed on my own using React, Bootstrap, and CSS.</p>
                <Button href="https://github.com/sjomansara/strive-capstoneproject-spotifystats" className="githubLink rounded-pill"><FontAwesomeIcon className="me-1" icon={faGithub}/> Open on GitHub</Button>
              </Modal.Body>
            </Modal>
            </div>
    )
}

export default PortfolioPage
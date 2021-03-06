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
    const [linkedinShow, setLinkedinShow] = useState(false);
    const [weatherShow, setWeatherShow] = useState(false);
    const [spotifyShow, setSpotifyShow] = useState(false);

    return (
        <div>
        <Container>
        <Jumbotron className="ms-4 mt-5" style={{ backgroundColor: "rgb(47, 47, 47)" }}>
        <h1 className='ms-3 mb-5' style={{ marginTop: "9rem" }}>My portfolio</h1>
        <p className='ms-3 mb-5' style={{color: "#DFDFE2"}}>Here you can take a look at some of my projects and course work.</p>
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
                <Card onClick={() => setLinkedinShow(true)} className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/linkedin1.png" />
                    <div class="overlay">
                        <div class="text">LinkedIn Clone</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card onClick={() => setWeatherShow(true)} className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/weather1.png" />
                    <div class="overlay">
                        <div class="text">Weather App</div>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col md={3}>
                <Card onClick={() => setSpotifyShow(true)} className="portfolioCard mb-3 hvr-grow" style={{ width: '18rem' }}>
                    <div className="imgContainer">
                    <Card.Img className="cardImg" variant="top" src="/spotify1.png" />
                    <div class="overlay">
                        <div class="text">Spotify Clone</div>
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
                <Button href="https://github.com/sjomansara/strive-capstoneproject-spotifystats" target="_blank" rel="noopener noreferrer" className="githubLink rounded-pill"><FontAwesomeIcon className="me-1" icon={faGithub}/> Open on GitHub</Button>
              </Modal.Body>
            </Modal>


            <Modal
              size="lg"
              show={linkedinShow}
              onHide={() => setLinkedinShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              className="weatherModal"
            >
            <Modal.Header closeButton><h3 style={{ color: "#7D7D8C" }}>LinkedIn Clone</h3></Modal.Header>
              <Modal.Body>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="mb-5"
                    className="d-block w-100"
                    src="/linkedin1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/linkedin2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/linkedin3.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/linkedin4.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/linkedin5.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                <p className="mt-4" style={{ color: "#7D7D8C" }}>A collaborative effort between team members from a bootcamp course, this app is designed to be a clone of LinkedIn that replicates much of the design and functionality of popular Linkedin services. I contributed to a large portion of the design and project management aspects, and contributed to functional parts as well, such as API fetching within React components.</p>
                <Button href="https://github.com/emmanuelky/Team-Build-2" target="_blank" rel="noopener noreferrer" className="githubLink rounded-pill"><FontAwesomeIcon className="me-1" icon={faGithub}/> Open on GitHub</Button>
              </Modal.Body>
            </Modal>

            <Modal
              size="lg"
              show={weatherShow}
              onHide={() => setWeatherShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton><h3 style={{ color: "#7D7D8C" }}>Weather App</h3></Modal.Header>
              <Modal.Body>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="mb-5"
                    className="d-block w-100"
                    src="/weather1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/weather2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                </Carousel>
                <p className="mt-4" style={{ color: "#7D7D8C" }}>A weather app built using React. This solo project can show weather reports including hourly temperature, humidity and wind speed using the OpenWeather API. As of now can be used only for certain locations, but is planned to be expanded for use for any location.</p>
                <br></br>
                <Button href="https://github.com/sjomansara/strive-capstoneproject-spotifystats" target="_blank" rel="noopener noreferrer" className="githubLink rounded-pill"><FontAwesomeIcon className="me-1" icon={faGithub}/> Open on GitHub</Button>
              </Modal.Body>
            </Modal>


            <Modal
              size="lg"
              show={spotifyShow}
              onHide={() => setSpotifyShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton><h3 style={{ color: "#7D7D8C" }}>Spotify Clone</h3></Modal.Header>
              <Modal.Body>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="mb-5"
                    className="d-block w-100"
                    src="/spotify1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                </Carousel>
                <p className="mt-4" style={{ color: "#7D7D8C" }}>A benchmark project from a bootcamp course. This app is designed to be a clone of Spotify that replicates much of the design and functionality of Spotify. Build with React. I'm currently working on adding an artist and an album page and some functionality.</p>
                <br></br>
                <Button href="https://github.com/sjomansara/strive-m4d10-spotify" target="_blank" rel="noopener noreferrer" className="githubLink rounded-pill"><FontAwesomeIcon className="me-1" icon={faGithub}/> Open on GitHub</Button>
              </Modal.Body>
            </Modal>


            </div>
    )
}

export default PortfolioPage
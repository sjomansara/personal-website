import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Container>
        <h1 className='mb-5 contact'>Contact me</h1>
        <Form className="form">
        <Row>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Type here" rows={3} />
        </Form.Group>
        </Form>
        <div className='sendButton'><Button className="my-4 px-4 rounded-pill" variant="outline-primary" style={{ color: "rgb(212, 196, 233)", borderColor: "rgb(212, 196, 233)" }}>Send message</Button></div>
        </Container>
    )
}

export default ContactForm
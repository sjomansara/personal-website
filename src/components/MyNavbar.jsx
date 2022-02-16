import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const MyNavbar = () => {
    return ( 
        <Navbar expand="lg" className="pt-3">
        <Link to="/"><Navbar.Brand href="#home" className="ms-5 hvr-grow" style={{ fontSize: "35px" }}><FontAwesomeIcon icon={faCode} /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Link to="/"><Nav.Link href="#home" className="pr-3">Home</Nav.Link></Link>
            <Link to="/aboutme"><Nav.Link href="#link" className="pr-3">About Me</Nav.Link></Link>
            <Link to="/portfolio"><Nav.Link href="#link" className="pr-3">Portfolio</Nav.Link></Link>
            <Nav.Link href="#link" className="me-3">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
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
            <Link to="/"className="ms-3 hvr-grow">Home</Link>
            <Link to="/aboutme" className="ms-3 hvr-grow">About Me</Link>
            <Link to="/portfolio" className="ms-3 hvr-grow">Portfolio</Link>
            <Link to="/contact" className="ms-3 me-5 hvr-grow">Contact</Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
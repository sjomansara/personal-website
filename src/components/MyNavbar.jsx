import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const MyNavbar = () => {
    return ( 
        <Navbar expand="lg" className="pt-3">
        <Link to="/"><Navbar.Brand href="#home" className="navLink ml-3 hvr-grow" style={{ fontSize: "35px" }}><FontAwesomeIcon icon={faCode} /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-3">
            <Link to="/"><Nav.Link href="#home" className="navLink pr-3 hvr-grow">Home</Nav.Link></Link>
            <Link to="/aboutme"><Nav.Link href="#link" className="navLink pr-3 hvr-grow">About Me</Nav.Link></Link>
            <Link to="/portfolio"><Nav.Link href="#link" className="navLink pr-3 hvr-grow">Portfolio</Nav.Link></Link>
            <Nav.Link href="#link" className="navLink hvr-grow">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
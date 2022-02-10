import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const MyNavbar = () => {
    return ( 
        <Navbar expand="lg" className="pt-3">
        <Navbar.Brand href="#home" className="navLink ml-3" style={{ fontSize: "30px" }}><FontAwesomeIcon icon={faCode} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-3">
            <Nav.Link href="#home" className="navLink pr-3">Home</Nav.Link>
            <Nav.Link href="#link" className="navLink pr-3">About Me</Nav.Link>
            <Nav.Link href="#link" className="navLink pr-3">Portfolio</Nav.Link>
            <Nav.Link href="#link" className="navLink">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
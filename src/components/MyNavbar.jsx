import { Navbar, Nav } from "react-bootstrap"

const MyNavbar = () => {
    return ( 
        <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#home" className="navLink">HOME</Nav.Link>
            <Nav.Link href="#link" className="navLink">ABOUT ME</Nav.Link>
            <Nav.Link href="#link" className="navLink">PORTFOLIO</Nav.Link>
            <Nav.Link href="#link" className="navLink">CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
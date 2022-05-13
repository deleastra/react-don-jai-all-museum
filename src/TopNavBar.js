import {Nav, Navbar, Container, Button} from 'react-bootstrap'
function TopNavBar() {
    return (
        <Navbar fixed="top" bg=''>
            <Container>
                <Navbar.Brand href="#home">DONJAI ALL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About us</Nav.Link>
                <Nav.Link href="#book">Book ticket</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#login">Log in</Nav.Link>
                <Button variant="sign-up">Sign up</Button>
            </Container>
        </Navbar>
    )
}

export default TopNavBar;
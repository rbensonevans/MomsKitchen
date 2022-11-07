import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import momskitchen from './momskitchen_logo.jpg'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    <img src={momskitchen} width="40" height="40" className="" alt="" />
                    &nbsp; MomsKitchen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/store1">Store1</Nav.Link>
                    <Nav.Link as={Link} to="/store2">Store2</Nav.Link>
                    <Nav.Link as={Link} to="/store3">Store3</Nav.Link>
                    <Nav.Link as={Link} to="/store4">Store4</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/create-store">CreateStore</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/upload-menu">UploadMenu</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/list-menu">ListMenu</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        {account ? (
                            <NavDropdown.Item
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </NavDropdown.Item>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;
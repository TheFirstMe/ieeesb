import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./Header.scss"

const MetaHeader = () => {
    const Links = [
        { "title": "Home", "url": "#home" },
        { "title": "Features", "url": "#features" },
        { "title": "Pricing", "url": "#pricing" }
    ];
    return (
        <Navbar bg="ieee-black" variant="dark">
            <Nav className="mr-auto">
                {/* <Nav.Item>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>

                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                {
                    Links.map((link, key) => (
                        <Nav.Item key={key}>
                            <Nav.Link 
                                href={link.url}
                                // style={ key == Links.length - 1 ? {padding: "0 13px"} : { borderRight: "1px solid rgba(0,102,153,.2)", padding: "0 13px" }}
                            >
                                {link.title}
                            </Nav.Link>
                        </Nav.Item>
                    ))
                }
            </Nav>
        </Navbar>
    );
}

const Header = () => {
    return (
        <header>
            <MetaHeader />
        </header>
    );
}

export default Header;
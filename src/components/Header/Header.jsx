import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import "./Header.scss"
import styled from 'styled-components';
import Logo from "../../assets/svg/logo.svg";

const IEEE = () => (
    <img height={30} src={require("../../assets/ieee.png")} alt="IEEE" />
)

const MetaHeader = (props) => {
    const { children, className, Links } = props
    return (
        <div className={className + " d-none d-lg-block"}>
            <Container>
                <Row>
                    <Nav>
                        {
                            Links.map((link, key) => (
                                <Nav.Item key={key}>
                                    <Nav.Link href={link.url} target="_blank">{link.title}</Nav.Link>
                                </Nav.Item>
                            ))
                        }
                    </Nav>
                </Row>
            </Container>
        </div>
    );
}

export const StyledMetaHeader = styled(MetaHeader)`
    min-height: 40px;
    background-color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    .nav .nav-item{  
        :first-child{
            a{
                padding-left: 0;
            }
        } 
        a{
            font-family: "Open Sans";
            font-size: 11px;
            font-weight: 500;
            padding-top:0;
            padding-bottom: 0;
            color: white;
            :hover{
                color:	#00629B;
            }
        }
        
        :not(:last-child){
            a{
                border-right: 1px solid rgba(117,120,123,.4); 
            }
        }
    }
`;

const Header = () => {
    const Links = [
        { title: "IEEE.org", url: "https://www.ieee.org" },
        { title: <>IEEE <em>Xplore</em> Digital Library</>, url: "https://ieeexplore.ieee.org" },
        { title: "IEEE Standards", url: "https://standards.ieee.org" },
        { title: "IEEE Spectrum", url: "https://spectrum.ieee.org" },
        { title: "More sites", url: "https://www.ieee.org/sitemap" }
    ];
    return (
        <header>
            <StyledMetaHeader Links={Links} />
            <Navbar expand="md" className="p-0 custom-navbar">
                <div className="d-flex flex-column align-items-start w-100">
                    <Container className="site-identifier" fluid>
                        <Container>
                            <Row>
                                <Col>
                                    <Logo height={50} />
                                </Col>
                                <Col className="text-right">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                </Col>
                                <Col className="text-right pt-2 d-none d-md-block" >
                                    <a href="https://www.ieee.org" target="_blank" >
                                        <IEEE />
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Container className="nav-links" fluid>
                        <Container>
                            <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                                <Nav className="mr-auto">
                                    <Nav.Item>
                                        <Nav.Link href="#home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Container>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
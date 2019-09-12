import React from 'react';
import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import "./Header.scss"
import styled from 'styled-components';


const MetaHeader = (props) => {
    const {children, className, Links} = props
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
                {children}
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
                color:	#007377;
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
            <StyledMetaHeader Links={Links} hey="ss" />
        </header>
    );
}

export default Header;
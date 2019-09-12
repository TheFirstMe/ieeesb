import React, { Component } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Nav } from "react-bootstrap";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.scss";
import { StyledMetaHeader as IEEENav } from "../Header/Header";
import styled from "styled-components";
import {FacebookIcon, InstagramIcon} from "react-share";

const FooterNav = ({ className, Links }) => {
    return (
        <div className={className}>
            <Nav className="flex-column flex-md-row">
                {
                    Links.map((link, key) => (
                        <Nav.Item key={key}>
                            <Nav.Link href={link.url} className="test" target="_blank">{link.title}</Nav.Link>
                        </Nav.Item>
                    ))
                }
            </Nav>
        </div>
    );
}

const StyledFooterNav = styled(FooterNav)`
    padding-top: 10px;
    padding-bottom: 10px;
    .nav .nav-item{  
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
    margin-bottom: 30px;
    .nav .nav-item a{
        font-family: "Open Sans Condensed";
        text-transform: uppercase;
    }
`;

const Copyright = () => (
    <>
        <p>
            Copyright ©  {new Date().getFullYear()} IEEE – All rights reserved.
            Use of this website signifies your agreement to the&nbsp;
            <a href="http://www.ieee.org/about/help/site_terms_conditions.html"
                target="_blank"
                className="text-white"
            >
                <u>IEEE Terms and Conditions</u>
            </a>.
            <br />
            A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </p>
    </>
)

class Footer extends Component {
    render() {
        const Links = [
            { title: "IEEE.org", url: "https://www.ieee.org" },
            { title: <>IEEE <em>Xplore</em> Digital Library</>, url: "https://ieeexplore.ieee.org" },
            { title: "IEEE Standards", url: "https://standards.ieee.org" },
            { title: "IEEE Spectrum", url: "https://spectrum.ieee.org" },
            { title: "More sites", url: "https://www.ieee.org/sitemap" }
        ];
        const { config } = this.props;
        // const { copyright } = config;

        // if (!copyright) {
        //     return null;
        // }
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <FooterNav className="footer-nav" Links={Links} />
                    </Row>
                    <Row>
                        <Col className="pl-md-0"><Copyright /></Col>
                    </Row>
                    <Row>
                        <UserLinks config={config} labeled />
                        <InstagramIcon size={32} round />
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;

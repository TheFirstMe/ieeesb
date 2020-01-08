import React, { Component } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Nav } from "react-bootstrap";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.scss";
import { StyledMetaHeader as IEEENav } from "../Header/Header";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';

const FooterNav = ({ className, Links }) => {
    return (
        <div className={className}>
            <Nav className="flex-column flex-md-row" aria-label="Footer">
                {
                    Links.map((link, key) => (
                        <Nav.Item key={key}>
                            <Nav.Link
                                href={link.url}
                                className="test"
                                target={link.self ? "_self" : "_blank"} rel="noopener noreferrer">
                                {link.title}
                                <div class="mask"></div>
                            </Nav.Link>
                        </Nav.Item>
                    ))
                }
            </Nav>
        </div>
    );
}


const Copyright = () => (
    <>
        <p>
            © Copyright {new Date().getFullYear()} IEEE – All rights reserved.
            Use of this website signifies your agreement to the&nbsp;
            <a href="http://www.ieee.org/about/help/site_terms_conditions.html"
                target="_blank"
                className="text-white"
                rel="noopener noreferrer"
            >
                <u>IEEE Terms and Conditions</u>
            </a>.<br />
            A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </p>
    </>
)

class Footer extends Component {
    render() {
        const Links = [
            { title: "Home", url: "/", self: true },
            { title: "More Sites", url: "http://www.ieee.org/sitemap.html" },
            { title: "Contact", url: "https://standards.ieee.org" },
            { title: "Accessibility", url: "https://www.ieee.org/accessibility_statement.html" },
            { title: "Nondiscrimination Policy", url: "https://www.ieee.org/nondiscrimination" },
            { title: "IEEE Privacy Policy", url: "https://www.ieee.org/privacy" }
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
                        <Col className="pl-md-0" md={12} lg={8}><Copyright /></Col>
                        <Col md={12} lg={4}>
                            <UserLinks config={config} labeled />
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;

import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import "./Header.scss"
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import Logo from "../../assets/svg/logo.svg";
import { FaSearch } from 'react-icons/fa';
import Search from "../Search"
const searchIndices = [
//   { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Events`, type: `postHit` },
]
const IEEE = () => (
    <img height={30} src={require("../../assets/ieee.png")} alt="IEEE" />
)

const darkTheme = {
    color: "#212122"
}

const lightTheme = {
    color: "white"
}

const MetaHeader = ({ className, links }) => {
    return (
        <div className={className + " d-none d-md-block"}>
            <Container>
                <Row>
                    <Nav>
                        {
                            links.map((link, key) => (
                                <Nav.Item key={key}>
                                    <Nav.Link href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</Nav.Link>
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


class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.test = this.test.bind(this);
        this.state = {
            navExpanded: false,
            active: true,
            stuck: null,
            dark: '',
            btnVariant: 'outline-dark',
            fixed: ''
        };
    }

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }

    test(t) {
        if (t) {
            this.setState({ stuck: '', dark: '', btnVariant: 'outline-dark', fixed: '' });
            // return '';
        }
        else {
            this.setState({ stuck: 'stuck', dark: 'dark', btnVariant: 'outline-light', fixed: 'top' });
            // return 'test';
        }
    }

    render() {
        // const {pathName} = this.props;
        return (
            <>
                <Navbar
                    onToggle={this.setNavExpanded}
                    expanded={this.state.navExpanded}
                    expand="md"
                    className="site-identifier px-3"
                >
                    <Container>
                        <Navbar.Brand href="/"><Logo height={50} /></Navbar.Brand>
                        <Navbar.Toggle />
                        <a href="https://www.ieee.org" className="d-none d-md-block" target="_blank" rel="noopener noreferrer" >
                            <IEEE />
                        </a>
                    </Container>
                </Navbar>
                <Component test={this.test} />
                <Navbar expanded={this.state.navExpanded} expand="md" bg={!this.state.navExpanded && this.state.dark} className={"custom-navbar p-0 " + this.state.stuck} sticky="top">
                    <Container className="pl-0">
                        <Navbar.Collapse className="">
                            <Nav className="mr-auto pl-3 pl-md-0" onSelect={this.closeNav}>
                                {
                                    this.props.links.map((link, key) => (
                                        <Location key={key}>
                                            {({ location }) => {
                                                let pathName = location.pathname === '/' ? "/" : location.pathname.replace(/\/+/g, "/");
                                                pathName = pathName === '/' ? "/" : pathName.replace(/\/+$/, "");
                                                return (
                                                    <Nav.Item 
                                                        className={
                                                            (pathName === link.url) 
                                                                || 
                                                            (pathName.includes(link.url) && link.url!='/')  ? 'active' : ''} >
                                                        <Nav.Link href={link.url} className="text-nowrap">{link.title}</Nav.Link>
                                                    </Nav.Item>
                                                )
                                            }}
                                        </Location>

                                    ))
                                }
                            </Nav>
                            <ThemeProvider theme={this.state.stuck ? darkTheme : lightTheme} >
                                <Search  indices={searchIndices} />
                            </ThemeProvider>
                            
                            {/* <Form inline className="pb-3 pb-md-0">
                                <InputGroup className="mx-auto" style={{width:"auto"}}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        aria-describedby="inputGroupPrepend"
                                        size="md"
                           
                                    />
                                    <InputGroup.Append>
                                        <Button className="search-button" variant={this.state.btnVariant}>
                                            <FaSearch />
                                        </Button>
     
                                    </InputGroup.Append>
                                </InputGroup>

                            </Form> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

import { InView } from 'react-intersection-observer'

const Component = ({ test }) => (
    <InView onChange={(inView, entry) => test(inView)}>
        {({ inView, ref, entry }) => {

            return (
                <div ref={ref}></div>
            )
        }}
    </InView>
)

const Header = ({ pathName }) => {
    const metalinks = [
        { title: "IEEE.org", url: "https://www.ieee.org" },
        { title: <>IEEE <em>Xplore</em> Digital Library</>, url: "https://ieeexplore.ieee.org" },
        { title: "IEEE Standards", url: "https://standards.ieee.org" },
        { title: "IEEE Spectrum", url: "https://spectrum.ieee.org" },
        { title: "More sites", url: "https://www.ieee.org/sitemap" }
    ];
    const navlinks = [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Events", url: "/events" },
        { title: "Execom Members", url: "/execom-members" },
        { title: "Contact", url: "/contact" }
    ];
    return (
        <>
            <StyledMetaHeader links={metalinks} />
            {/* <Component test="d" /> */}
            <MainHeader links={navlinks} />
        </>
    );
}

export default Header;
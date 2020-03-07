/** @jsx jsx */
import { jsx, Flex, Box, Grid } from 'theme-ui'
import Logo from "../../assets/svg/logo.svg";
import IEEE from "../../assets/svg/ieee.svg"
import styled from '@emotion/styled'
import { mediaQueries } from "../../design-tokens/media-queries"
import { Link } from "gatsby"
import React from "react"
import Search from "../Search"
const searchIndices = [
    //   { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
    { name: `Posts`, title: `Events`, type: `postHit` },
]

import Container from "../container"
const links = [
    { title: "IEEE.org", url: "https://www.ieee.org" },
    { title: <>IEEE <em>Xplore</em> Digital Library</>, url: "https://ieeexplore.ieee.org" },
    { title: "IEEE Standards", url: "https://standards.ieee.org" },
    { title: "IEEE Spectrum", url: "https://spectrum.ieee.org" },
    { title: "More sites", url: "https://www.ieee.org/sitemap" }
];

const navItemHorizontalSpacing = [1, null, 2]

const navItemStyles = {
    borderBottom: `2px solid transparent`,
    color: `navigation.linkDefault`,
    display: `block`,
    fontSize: 2,
    lineHeight: 1.5,
    textDecoration: `none`,
    zIndex: 1,
    "&:hover, &.active": { backgroundColor: `navigation.linkHover` },
    "&.active": { color: `navigation.linkActive`, }
}

const metaNavItemStyles = {
    ...navItemStyles,
    "&:hover, &.active": null,
    "&:hover": {
        color: `navigation.metaLinkHover`
    },
    fontSize: 0,
    color: `white`,
}

const MetaNavItem = ({ to, target, rel, children }) => (
    <li
        sx={{
            display: `block`,
            m: 0,
            "&:first-of-type": {
                a: {
                    pl: 0,
                }
            },
            "&:not(:last-of-type)": {
                a: {
                    borderRight: "1px solid rgba(117,120,123,.4)"
                },
            }
        }}
    >
        <a
            href={to}
            target={target}
            rel={rel}
            sx={{
                ...metaNavItemStyles,
                px: 4,

            }}>
            {children}
        </a>
    </li>
)

const NavItem = ({ to, children }) => {
    return (
        <li
            sx={{
                display: `block`,
                m: 0,
                // mx: navItemHorizontalSpacing,
                // px: navItemHorizontalSpacing
            }}
        >
            <Link
                to={to}
                activeClassName="active"
                partiallyActive={true}
                sx={{
                    ...navItemStyles,
                    py: `13px`,
                    px: `30px`,
                }}
            >
                {children}
            </Link>

        </li>
    )
}


const navlinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Events", url: "/events" },
    { title: "Execom Members", url: "/execom-members" },
    { title: "Contact", url: "/contact" }
];

const Navbar = (props) => (
    <header>
        <div
            sx={{
                backgroundColor: `black`,
            }}
        >
            <Container>
                <nav
                    sx={{
                        display: `none`,
                        [mediaQueries.md]: {
                            color: `white`,
                            alignItems: `center`,
                            alignSelf: `flex-end`,
                            display: `flex`,
                            listStyle: `none`,
                            overflowX: `auto`,
                            py: 2,
                        },
                    }}
                >
                    {
                        links.map((link, key) => (
                            <MetaNavItem key={key} to={link.url} target="_blank" rel="noopener noreferrer">
                                {link.title}
                            </MetaNavItem>
                        ))
                    }
                </nav>
            </Container>
        </div>
        <div
            sx={{
                py: 7,
                backgroundColor: `navigation.background`,
            }}
        >
            <Container>
                <Flex sx={{ alignItems: 'center', }}>
                    <Logo
                        sx={{
                            height: 40,
                            fill: `primary`,
                        }}
                    />
                    <Box mx='auto' />
                    <IEEE sx={{ height: 30, }} />
                </Flex>

            </Container>
        </div>
        <div
            sx={{
                backgroundColor: `#dad7d8`,
            }}
        >
            <Container pl={0}>
                <Flex sx={{ alignItems: 'center', justifyContent: 'end'}}>
                    <nav
                        sx={{
                            fontFamily: `heading`,
                            display: `none`,
                            [mediaQueries.md]: {
                                alignSelf: `flex-end`,
                                display: `inline-flex`,
                                listStyle: `none`,
                                m: 0,
                                overflowX: `auto`,
                            },
                        }}
                    >
                        {navlinks.map((link, key) => (
                            <NavItem key={key} to={link.url}>{link.title}</NavItem>
                        ))}
                    </nav>
                    <Box mx='auto' />
                    <div
                        sx={{
                            display: `inline-block`,
                            "form": {
                                mb: 0,
                            }
                        }}
                    >
                        <Search indices={searchIndices} />
                    </div>
                </Flex>

            </Container>
        </div>
    </header>
)

export default Navbar
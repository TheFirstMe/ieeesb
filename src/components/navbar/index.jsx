/** @jsx jsx */
import { jsx, Flex, Box, Grid } from 'theme-ui'
import Logo from "../../assets/svg/logo.svg";
import styled from '@emotion/styled'
import { mediaQueries } from "../../design-tokens/media-queries"
import { Link } from "gatsby"
import React from "react"
import Container from "../container"
const links = [
  { title: "IEEE.org", url: "https://www.ieee.org" },
  { title: <>IEEE <em>Xplore</em> Digital Library</>, url: "https://ieeexplore.ieee.org" },
  { title: "IEEE Standards", url: "https://standards.ieee.org" },
  { title: "IEEE Spectrum", url: "https://spectrum.ieee.org" },
  { title: "More sites", url: "https://www.ieee.org/sitemap" }
];

const MetaHeader = () => {
  return (
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
  )
}

const navItemHorizontalSpacing = [1, null, 2]

const navItemStyles = {
  borderBottom: `2px solid transparent`,
  // color: `white`,
  display: `block`,
  fontSize: 2,
  lineHeight: 1.5,
  // [mediaQueries.md]: {
  //   lineHeight: t => `calc(${t.sizes.headerHeight} - ${navItemTopOffset})`,
  // },
  position: `relative`,
  textDecoration: `none`,
  zIndex: 1,
  "&:hover, &:focus": { color: `navigation.linkHover` },
}

const metaNavItemStyles = {
  ...navItemStyles,
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
        "&:hover": {
          color: "#00629B"
        },

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
        mx: navItemHorizontalSpacing,
        // px: navItemHorizontalSpacing
      }}
    >
      <Link
        to={to}
        activeClassName="active"
        partiallyActive={true}
        sx={{
          ...navItemStyles,
          // "&.active": {
          //   borderBottomColor: `lilac`,
          //   color: `black`,
          // },
        }}
      >
        {children}
      </Link>

    </li>
  )
}

const Navbar = (props) => (
  <header
    sx={{
      // minHeight: `4rem`,
      px: 0,
      position: `absolute`,
      left: 0,
      right: 0,
      border: `1px solid black`
    }}
  >
    <Container
      sx={{
        backgroundColor: `black`,
      }}
    >
      <MetaHeader />
    </Container>
    <div
    >
      {/* <Box
      sx={{
        alignItems: `center`,
        height: `100%`,
        margin: `0 auto`,
        px: 6,
        width: `100%`,
        position: `relative`,
        "&:after": {
          bg: `transparent`,
          bottom: 0,
          content: `''`,
          height: 1,
          left: 0,
          position: `absolute`,
          right: 0,
          zIndex: -1,
        },
      }}
    > */}
      {/* <Logo
        sx={{
          height: 40,
          fill: `#0b5172`,
        }}
      /> */}
      <Container
        psx={{
          py: 7,
          backgroundColor: `#ecebe9`,
        }}
      >
        <Logo
          sx={{
            height: 40,
            fill: `#0b5172`,
          }}
        />
      </Container>
      <nav
        sx={{
          fontFamily: `heading`,
          display: `none`,
          [mediaQueries.md]: {
            alignSelf: `flex-end`,
            display: `flex`,
            listStyle: `none`,
            m: 0,
            maskImage: t =>
              `linear-gradient(to right, transparent, white ${t.space[1]}, white 98%, transparent)`,
            overflowX: `auto`,
          },
        }}
      >
        <NavItem to="/">Home</NavItem>
      </nav>
    </div>
    {/* </Box> */}
  </header>
)

export default Navbar
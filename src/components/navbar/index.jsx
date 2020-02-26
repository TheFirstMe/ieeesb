/** @jsx jsx */
import { jsx, Flex, Box, Grid, Container } from 'theme-ui'
import Logo from "../../assets/svg/logo.svg";
import { mediaQueries } from "../../design-tokens/media-queries"
import { Link } from "gatsby"
import React from "react"

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
          // paddingX: `12em`,
          // marginX: `auto`,
          minHeight: 40,
          color: `white`,
          alignItems: `center`,
          alignSelf: `flex-end`,
          display: `flex`,
          listStyle: `none`,
          // mx: -2,
          maskImage: t =>
            `linear-gradient(to right, transparent, white ${t.space[1]}, white 98%, transparent)`,
          overflowX: `auto`,
        },
      }}
    >
      {/* <NavItem isMetaHeader to="/">Home</NavItem> */}
      {
        links.map((link, key) => (
          <NavItem isMetaHeader key={key} to={link.url} target="_blank" rel="noopener noreferrer">
            {/* <Nav.Link href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</Nav.Link> */}
            {link.title}
          </NavItem>
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

const NavItem = ({ to, children, isMetaHeader }) => {
  let styles = { ...navItemStyles }
  if (isMetaHeader) {
    styles.fontSize = 0
    styles.color = `white`
  }
  return (
    <li
      sx={{
        display: `block`,
        m: 0,
        mx: navItemHorizontalSpacing,
        borderRight: `1px solid rgba(117, 120, 123, 0.4)`,
        px: navItemHorizontalSpacing
      }}
    >
      <Link
        to={to}
        activeClassName="active"
        partiallyActive={true}
        sx={{
          ...styles,
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
      minHeight: `4rem`,
      px: 0,
      position: `absolute`,
      left: 0,
      right: 0,
      border: `1px solid black`
    }}
  >
    <div
      sx={{
        backgroundColor: `black`,
      }}
    >
      <Container
        mx={`auto`}
        px={15}
        sx={{
          maxWidth: t => t.sizes.containerSizes,
        }}
      >
        <MetaHeader />
      </Container>
    </div>
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

      <nav
        sx={{
          fontFamily: `heading`,
          display: `none`,
          [mediaQueries.md]: {
            alignSelf: `flex-end`,
            display: `flex`,
            listStyle: `none`,
            m: 0,
            // maskImage: t =>
            //   `linear-gradient(to right, transparent, white ${t.space[1]}, white 98%, transparent)`,
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
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Logo from "../../assets/svg/logo.svg";
import { mediaQueries } from "../../design-tokens/media-queries"
// import React from "react"
// import { Link } from "gatsby"

// const navItemHorizontalSpacing = [1, null, 2]

// const navItemStyles = {
//   borderBottom: `2px solid transparent`,
//   color: `blue`,
//   display: `block`,
//   fontSize: 3,
//   lineHeight: 1.5,
//   // [mediaQueries.md]: {
//   //   lineHeight: t => `calc(${t.sizes.headerHeight} - ${navItemTopOffset})`,
//   // },
//   position: `relative`,
//   textDecoration: `none`,
//   zIndex: 1,
//   "&:hover, &:focus": { color: `navigation.linkHover` },
// }

// const NavItem = ({ to, children }) => (
//   <li
//     sx={{
//       display: `block`,
//       m: 0,
//       mx: navItemHorizontalSpacing,
//     }}
//   >
//     <Link
//       to={to}
//       activeClassName="active"
//       partiallyActive={true}
//       sx={{
//         ...navItemStyles,
//         "&.active": {
//           borderBottomColor: `lilac`,
//           color: `black`,
//         },
//       }}
//     >
//       {children}
//     </Link>
//   </li>
// )

const Navbar = (props) => (
  <header
    sx={{
      height: `4rem`,
      px: 0,
      position: `absolute`,
      left: 0,
      right: 0
    }}
  >
    <Flex
      sx={{
        alignItems: `center`,
        fontFamily: `heading`,
        height: `100%`,
        margin: `0 auto`,
        px: 6,
        width: `100%`,
        position: `relative`,
        // "&:after": {
        //   bg: `transparent`,
        //   bottom: 0,
        //   content: `''`,
        //   height: 1,
        //   left: 0,
        //   position: `absolute`,
        //   right: 0,
        //   zIndex: -1,
        // },
      }}
    >
      <Logo
        sx={{
          height: 40,
          fill: `#0b5172`,
        }}
      />
      {/* <nav
        sx={{
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
      </nav> */}
    </Flex>
  </header>
)

export default Navbar
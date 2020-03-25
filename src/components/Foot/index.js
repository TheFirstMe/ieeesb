/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

// import UserLinks from "../UserLinks/UserLinks";
// import Logo from "../../assets/svg/logo.svg";
import { mediaQueries } from "../../design-tokens"
import Container from "../container"

const Links = [
  { title: "Home", url: "/", self: true },
  { title: "More Sites", url: "http://www.ieee.org/sitemap.html" },
  { title: "Contact", url: "https://standards.ieee.org" },
  { title: "Accessibility", url: "https://www.ieee.org/accessibility_statement.html" },
  { title: "Nondiscrimination Policy", url: "https://www.ieee.org/nondiscrimination" },
  { title: "IEEE Privacy Policy", url: "https://www.ieee.org/privacy" }
];


const FooterNavItem = ({ to, self, children }) => (
  <li
    sx={{
      display: `block`,
      m: 0,
      "&:not(:first-of-type) a div": {
        display: `none`,
        [mediaQueries.md]: {
          display: `block`,
          position: `absolute`,
          top: `50%`,
          left: `-10px`,
          width: `18px`,
          height: `1px`,
          backgroundColor: `rgba(117, 120, 123, 0.4)`,
          transform: `rotate(90deg)`,
          // "&:first-of-type": { display: `none` }
        }
      }
    }}
  >
    <a
      href={to}
      target={self ? "_self" : "_blank"}
      rel="noopener noreferrer"
      sx={{
        display: `block`,
        fontFamily: `heading`,
        px: `16px`,
        py: `17px`,
        position: `relative`,
        textTransform: `uppercase`,
        fontWeight: 700,
        lineHeight: `15px`,
        textDecoration: `none`,
        color: `white`,
        "&:hover": { color: `navigation.linkActive`, },
      }}
    >
      {children}
      <div />
    </a>
  </li>
)

const Footer = () => {
  return (
    <footer
      sx={{
        mt: 90,
        lineHeight: `22px`,
        fontSize: `12px`,
        padding: `20px 0 20px`,
        backgroundColor: `#222222`,
        color: `white`,
      }}
    >
      <Container>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`
          }}
        >


          <nav
            aria-label="Footer Links"
            sx={{
              display: `flex`,
              margin: `0 0 23px`,
              // flexGrow: 1,
              // flexShrink: 1,
              // minWidth: 0,
              // mr: `auto`
            }}
          >
            <ul
              sx={{
                display: `flex`,
                listStyle: `none`,
                m: 0,
                // alignSelf: `flex-end`,
                flexDirection: `column`,
                [mediaQueries.md]: {
                  flexDirection: `row`,
                }
              }}
            >
              {Links.map((link, key) => (
                <FooterNavItem key={key} to={link.url} self={link.self}>
                  {link.title}
                </FooterNavItem>
              ))}
            </ul>
          </nav>
          <p>
            © Copyright {new Date().getFullYear()} IEEE – All rights reserved.
            Use of this website signifies your agreement to the&nbsp;
            <a
              sx={{ color: `white` }}
              href="http://www.ieee.org/about/help/site_terms_conditions.html"
              target="_blank"
              className="text-white"
              rel="noopener noreferrer"
            >
              <u>IEEE Terms and Conditions</u>
            </a>.<br />
            A not-for-profit organization, IEEE is the world's largest technical
            professional organization dedicated to advancing technology
            <br sx={{
              display: `none`,
              [mediaQueries.md]: {
                display: `inline`
              }
            }} />
            for the benefit of humanity.
        </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
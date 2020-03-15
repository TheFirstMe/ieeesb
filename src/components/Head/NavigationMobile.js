/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react';
import Burger from '../burger';
import { mediaQueries } from "../../design-tokens/media-queries"
import { Link } from "gatsby"

import { bool } from 'prop-types';


const navItemStyles = {
    borderBottom: `2px solid transparent`,
    color: `navigation.linkDefault`,
    display: `block`,
    fontSize: 4,
    lineHeight: 1.5,
    textDecoration: `none`,
    textAlign: `center`,
    // zIndex: 1,
    "&.active": { color: `navigation.linkActive`, }
}

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
                    // px: `30px`,
                }}
            >
                {children}
            </Link>

        </li>
    )
}

const menuStyles = {
    fontFamily: `heading`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    // alignSelf: `flex-end`,
    backgroundColor: `navigation.background`,
    height: `100vh`,
    textAlign: `left`,
    py: 12,
    position: `absolute`,
    top: 0,
    left: 0,
    transition: `transform 0.2s ease-in-out`,
    width: `100%`,
    // a: {
    //     fontSize: `1.5rem`,
    //     textAlign: `center`,
    //     textTransform: `uppercase`,
    //     padding: `2rem 0`,
    //     color: `pink`,
    //     textDecoration: `none`,
    //     transition: `color 0.3s linear`,
    //     "&:hover": {
    //         color: `blue`,
    //     },
    // },
}

const Menu = ({ open }) => {
    return (
        <nav sx={{
            ...menuStyles,
            transform: open ? `translateX(0)` : `translateX(-100%)`,
        }}>
            {/* <a href="/">
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a> */}
        <NavItem to={`/`}>Home</NavItem>
        <NavItem to={`/`}>Home</NavItem>
        </nav>
    )
}

const NavigationMobile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            sx={{
                [mediaQueries.md]: {
                    display: `none`,
                },
            }}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default NavigationMobile
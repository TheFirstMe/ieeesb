/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
// import { StyledBurger } from './Burger.styled'
import { bool, func } from 'prop-types';

const burgerStyles = {
  position: `absolute`,
  top: `5%`,
  left: `2rem`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-around`,
  width: `2rem`,
  height: `2rem`,
  background: `transparent`,
  border: `none`,
  cursor: `pointer`,
  padding: 0,
  zIndex: 10,

  "&:focus": {
    outline: `none`,
  },
}

const Burger = ({ open, setOpen }) => {
  return (
    <button
      sx={{
        ...burgerStyles,
        div: {
          width: `2rem`,
          height: `0.25rem`,
          borderRadium: `10px`,
          transition: `all 0.2s linear`,
          position: `relative`,
          transformOrigin: `1px`,
          background: `black`,
          ":first-child": {
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
          },
          ":nth-child(2)": {
            opacity: open ? '0' : '1',
            // transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
          },

          ":nth-child(3)": {
            transform: open ? 'rotate(-45deg)' : 'rotate(0)',
          }
        }
      }}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </button>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger
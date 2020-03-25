/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
// import { StyledBurger } from './Burger.styled'
import { bool, func } from 'prop-types';

const burgerStyles = {
  position: `relative`,
  // top: `5%`,
  // left: `2rem`,
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

  div: {
    width: `2rem`,
    height: `0.25rem`,
    borderRadius: 10,
    transition: `all 0.2s linear`,
    position: `relative`,
    transformOrigin: 1,
    backgroundColor: `grey.80`,
  }
}

const Burger = React.forwardRef(({ open, setOpen, }, ref) => {
  return (
    <button
      ref={ref}
      sx={{
        ...burgerStyles,
        // div: {
        //   ...burgerStyles.div,
        //   ":first-of-type": {
        //     transform: open ? 'rotate(45deg)' : 'rotate(0)',
        //   },
        //   ":nth-of-type(2)": {
        //     opacity: open ? 0 : 1,
        //     // transform: open ? 'translateX(20px)' : 'translateX(0)',
        //   },

        //   ":nth-of-type(3)": {
        //     transform: open ? 'rotate(-45deg)' : 'rotate(0)',
        //   }
        // }
      }}
      onClick={() => {
        setOpen(!open)

      }}
    >
      <div />
      <div />
      <div />
    </button>
  )
})

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger
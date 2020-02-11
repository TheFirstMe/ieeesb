import React from 'react'
import styled, { css } from 'styled-components'
import { FaAlgolia } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

export const Root = styled.div`
 
  position: relative;
  display: grid;
  // ${props => props.theme.mobile && display}
  // ${props => !props.theme.mobile && 'display: none;'}
  grid-gap: 1em;
  color: black;
`
const display = css`
  @media (max-width: 768px) {
    display: none;
  }
`
Root.defaultProps = {
  theme: {
    display: 'none'
  }
}

export const SearchIcon = styled(FaSearch)`
  width: 1em;
  pointer-events: none;
  color: #006699;
`

const focus = css`
  background: white;
  color: #006699;
  cursor: text;
  width: auto;
  + ${SearchIcon} {
    color: #006699;
    margin: 0 0.3em;
  }
`

const collapsed = css`
  width: 0;
  cursor: pointer;
  color: #009CA6;
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: #75787B;
  }
`

const expanded = css`
  background: white;
  margin-left: -1.7em;
  padding-left: 2em;
  + ${SearchIcon} {
    margin: 0.3em;
    color:  #002855;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  height: 40px;
  padding: 0 10px;
  font-size: 1em;
  background: transparent;
  transition: 0.3s;
  border-radius: 0.2em;
  ${props => (props.collapse ? collapsed : expanded)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  background: white;
  max-height: 65vh;
  overflow-y: auto;
  z-index: 2;
  position: absolute;
  @media (max-width: 768px) {
    right: 0.75rem;
    left: 0.75rem;
  }
  @media (min-width: 768px) {
    right: 0px !important;
    left: inherit !important;
    width: 85vw;
  }
  top: calc(100% + 0.5em);
 
  max-width: 30em;
  box-shadow: 0 0 5px 0 black;
  padding: 0.7em 1em 0.4em;
  border-radius: 0.2em;
  * {
    margin-top: 0;
  }
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    border-top: 1px solid #e5e5e5;
  }
  mark {
    color: #00B5E2;
    background: #002855;
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #3d3d3d;
    h4 {
      color: white;
      background: #006699;
      padding: 0.1em 0.4em;
      border-radius: 0.2em;
      margin-bottom: 0.3em;
    }
  }
  * + header {
    padding-top: 1em;
  }
  a{
    text-decoration: none;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 1em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <FaAlgolia size="1em" /> Algolia
    </a>
  </span>
)
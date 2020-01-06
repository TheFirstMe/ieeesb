import React from "react"
import { Link } from "gatsby"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import styled from "styled-components"

const PaginationNav = styled.nav`
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
const PrevDiv = styled.div`
  @media (min-width: 576px) {
    width: 48%;
  }
  span {
    @media (min-width: 768px) {
      margin-left: -1.5em;
    }
    display: inline-flex;
    align-items: center;
  }
`
const NextDiv = styled.div`
  text-align: right;
  margin-top: 1.25rem;
  @media (min-width: 576px) {
    margin-top: 0rem;
    width: 48%;
  }
  span {
    @media (min-width: 768px) {
      margin-right: -1.5em;
    }
    display: inline-flex;
    align-items: center;
  }
`

const PrevNextLink = styled(Link)`
  border-bottom: 0;
  color: #006699;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.25;
`
const PrevNextLabel = styled.p`
    font-size: 0.9rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    margin-bottom: 0.5rem;
    margin-top: 0rem;
`

const PrevAndNext = ({ prev = null, next = null, ...props }) => {
  if (!prev && !next) {
    return null
  }
  return (
    <PaginationNav
      aria-label="pagination"
      {...props}
    >
      <PrevDiv>
        {prev && (
          <PrevNextLink to={prev.link} >
            <PrevNextLabel className="text-muted">Previous</PrevNextLabel>
            <span>
              <MdArrowBack
                style={{
                  flexShrink: 0,
                  marginRight: `0.5em`,
                  verticalAlign: `sub`,
                }}
              />
              {prev.title}
            </span>
          </PrevNextLink>
        )}
      </PrevDiv>
      <NextDiv>
        {next && (
          <PrevNextLink to={next.link}>
            <PrevNextLabel className="text-muted">Next</PrevNextLabel>
            <span>
              {next.title}
              <MdArrowForward
                style={{
                  flexShrink: 0,
                  marginLeft: `0.5em`,
                  verticalAlign: `sub`,
                }}
              />
            </span>
          </PrevNextLink>
        )}
      </NextDiv>
    </PaginationNav>
  )
}

export default PrevAndNext
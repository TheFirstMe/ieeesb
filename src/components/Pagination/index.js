import React from "react"
import { navigate } from "gatsby"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import PaginationLink from "./PaginationLink"
import styled from "styled-components"

const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px -1.5rem;
  padding: 1.5rem;
  flex-direction: column;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    background: transparent;
    border-top: 0rem;
    margin-bottom: 0rem;
    padding-top: 0rem;
    flex-direction: row;
  }
`
const PrevNextLinkDiv = styled.div`
  display: flex;
  margin: 0rem;
  padding: 0rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  @media (min-width: 768px) {
    width: 15rem;
    margin-bottom: 0rem;
  }
`
const PaginationDropdownDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.875rem;
  select{
    apperance: none;
    border: none;
    padding: 0.5ch 2ch 0.5ch 0.5ch;
    color: #006699;
    font-weight: bold;
  }
  svg{
    position: relative;
    right: 1rem;
    fill: #006699;
    pointer-events: none;
  }
`

export default class Pagination extends React.Component {
  changePage = e => {
    navigate(e.target.value ? `/events/${e.target.value}` : `/events/`)
  }
  render() {
    const { numPages, currentPage } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPageNum =
      currentPage - 1 === 1 ? `` : `${(currentPage - 1).toString()}`
    const nextPageNum = (currentPage + 1).toString()
    const prevPageLink = isFirst ? null : `/events/${prevPageNum}`
    const nextPageLink = isLast ? null : `/events/${nextPageNum}`

    const prevNextLinkClass = "border-bottom-0 text-primary"

    return (
      <PaginationDiv>
        <PrevNextLinkDiv>
          <PaginationLink to={prevPageLink} className={prevNextLinkClass}>
            <MdArrowBack style={{ verticalAlign: `sub` }} />
            Newer posts
          </PaginationLink>
          <PaginationLink to={nextPageLink} className={prevNextLinkClass}>
            Older posts
            <MdArrowForward style={{ verticalAlign: `sub` }} />
          </PaginationLink>
        </PrevNextLinkDiv>
        <PaginationDropdownDiv>
          <span>Showing page &nbsp;</span>
          <select
            aria-label="Pagination Dropdown"
            value={currentPage === 1 ? `` : currentPage.toString()}
            onChange={this.changePage}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <option
                value={`${i === 0 ? `` : i + 1}`}
                key={`pagination-number${i + 1}`}
                aria-label={`Goto Page ${i + 1}`}
                aria-current={currentPage === i + 1}
              >
                {i + 1}
              </option>
            ))}
          </select>
          <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
          >
            <path d="M0 0l5 4.998L10 0z" fillRule="evenodd" />
          </svg>
          <span>of &nbsp;</span>
          <span>{numPages}</span>
        </PaginationDropdownDiv>
      </PaginationDiv>
    )
  }
}
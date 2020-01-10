import React from "react"
import { Link } from "gatsby"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
// import getActiveItem from "../util/navbar/get-active-item"
// import getActiveItemParents from "../util/navbar/get-active-item-parents"
import styled from "styled-components"

const Separator = styled.span.attrs(({ character = <MdChevronRight/>}, props) => ({
  role: "presentation",
  children: character
}))`
  margin: ${props => props.m ? props.m : "0rem 0.25rem"};
`
const BreadcrumbNav = styled.nav`
  display: ${props => props.mobile ? 'inherit' : 'none'};
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  
  @media screen and (min-width: 576px ) {
    display: ${props => props.mobile ? 'none' : 'inherit'};
    margin-bottom: 2.5rem;
  }
`
const BreadCrumb = ({ crumbs, crumbLabel }) => {
  // provide escape if no itemList is provided so breadcrumb isn't rendered
  if (crumbs === undefined) return null
  else if (crumbs.length == 1) return null
  // const activeItem = getActiveItem(itemList.items, location, undefined)
  // const activeItemParents = getActiveItemParents(itemList.items, activeItem, [])
  // const topLevel = itemList.key
  // const topLevelTitle = itemList.breadcrumbTitle || itemList.title
  const activeCrumb = crumbs[crumbs.length - 1]
  const activeCrumbParents = crumbs.slice(0, crumbs.length - 1)
  const activeCrumbLabel = crumbLabel || activeCrumb.crumbLabel
  // const parentCrumbs = crumbs.slice(0,crumbs.length-1)
  return (
    <>
      {/* render the default view on desktop sizes with all links displayed */}
      <BreadcrumbNav className="text-muted">
        {/* <Link to="/">Home</Link>
        <Separator><MdChevronRight /></Separator>
        <Link to={`/${topLevel}/`}>{topLevelTitle}</Link>
        <Separator /> */}
        {activeCrumbParents.map(crumb => {
          const crumbLabel = crumb.crumbLabel
          return (
            <React.Fragment key={crumbLabel}>
              <span>
                <Link to={crumb.pathname}>{crumbLabel}</Link>
              </span>
              <Separator />
            </React.Fragment>
          )
        })}
        <span aria-current="page">
          {activeCrumbLabel}
        </span>
      </BreadcrumbNav>
      {/* render a smaller view on mobile viewports with only previous breadcrumb */}
      {activeCrumbParents && (
        <BreadcrumbNav className="text-muted" mobile>
          <Separator character={<MdChevronLeft />} m="0rem 0.25rem 0rem 0rem" />
          <Link
            to={
              activeCrumbParents[activeCrumbParents.length - 1]
                ? activeCrumbParents[activeCrumbParents.length - 1].pathname
                : `/`
            }
          >
            {activeCrumbParents[activeCrumbParents.length - 1]
              ? activeCrumbParents[activeCrumbParents.length - 1]
                .crumbLabel
              : "Home"}
          </Link>
        </BreadcrumbNav>
      )}
    </>
  )
}

export default BreadCrumb
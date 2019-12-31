import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Tags } from 'styled-icons/fa-solid/Tags'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { connectHits } from 'react-instantsearch-dom'

// export const PageHit = clickHandler => ({ hit }) => (
//   <div>
//     <Link to={hit.slug} onClick={clickHandler}>
//       <h4>
//         <Highlight attribute="title" hit={hit} tagName="mark" />
//       </h4>
//     </Link>
//     <Snippet attribute="excerpt" hit={hit} tagName="mark" />
//   </div>
// )

const postHit = hit => (
  <div className="pb-3">
    <Calendar size="1em" />
    &nbsp;
    <Highlight attribute="date" hit={hit} tagName="mark" />
    {hit.tags && 
      (
        <> 
          &emsp;
          <Tags size="1em" />
          &nbsp;
        </>
      )
    }
    {hit.tags && hit.tags.map((tag, index) => (
      <Fragment key={tag}>
        {index > 0 && `, `}
        {tag}
      </Fragment>
    ))}
  </div>
)

export default connectHits(function HitComp({ type, hits, onClick }) {
  const extend = { postHit }[type]
  return hits.map(hit => (
    <div key={hit.objectID} className="py-3">
      <Link to={`/events/` + hit.slug} onClick={onClick}>
        <h5>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h5>
      </Link>
      {extend && extend(hit)}
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  ))
})
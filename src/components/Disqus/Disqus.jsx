import React from "react"
import { DiscussionEmbed } from 'disqus-react'
import { useInView } from 'react-intersection-observer'

export const disqusConfig = ({ slug, title }) => ({
  shortname: process.env.GATSBY_DISQUS_SHORT_NAME,
  config: { identifier: slug, title },
})

export const Disqus = ({ slug, title }) => {
  const [ref, inView] = useInView({
    rootMargin: '300px 0px',
    triggerOnce: true,
  })
  return (
    <div
      ref={ref}
      id="comment-box"
      style={{
        minHeight: 104,
      }}
      className="my-4"
    >
      {inView && <DiscussionEmbed {...disqusConfig({ slug, title })} />}
    </div>
  )
}

export default Disqus
import React from "react"
import { DiscussionEmbed } from 'disqus-react'

export const disqusConfig = ({ slug, title }) => ({
  shortname: process.env.GATSBY_DISQUS_SHORT_NAME,
  config: { identifier: slug, title },
})

import { useInView } from 'react-intersection-observer'

export const Disqus = ({ slug, title }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  return (
    <>
      <div ref={ref}>
        {inView && <DiscussionEmbed {...disqusConfig({ slug, title })} />}
      </div>
    </>
  )
}

export default Disqus
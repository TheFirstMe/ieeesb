import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Form, Input, SearchIcon } from './styles'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form onSubmit={e => { e.preventDefault(); }} className="mr-auto pl-4 mb-md-0 mb-2">
    <Input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      // iOS Safari doesn't blur input automatically on tap outside.
      onMouseLeave={e => e.target.blur()}
      {...rest}
    />
    <SearchIcon />
  </Form>
))
import React from 'react'

import { Link } from 'react-router-dom'

const FormLayout = ({ title, children }) => (
  <div className="layout-form">
    <div className="inner">
      <Link to="/">&laquo; back</Link>
      <h2>{title}</h2>
      {children}
    </div>
  </div>
)

export default FormLayout

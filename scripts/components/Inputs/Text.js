import React from 'react'

const TextInput = ({
  label = 'Name',
  inputRef,
  description,
  ...res
}) => (
  <fieldset>
    <label>{label} <small>{description}</small></label>
    <input type="text" ref={inputRef} {...res} />
  </fieldset>
)

export default TextInput

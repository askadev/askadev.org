import React from 'react'

const TextInput = ({
  label = 'Name',
  inputRef,
  ...res
}) => (
  <fieldset>
    <label>{label}</label>
    <input type="text" ref={inputRef} {...res} />
  </fieldset>
)

export default TextInput

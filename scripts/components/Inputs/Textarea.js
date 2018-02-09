import React from 'react'

const TextareaInput = ({
  label = 'Name',
  inputRef,
  ...res
}) => (
  <fieldset>
    <label>{label}</label>
    <textarea ref={inputRef} {...res}></textarea>
  </fieldset>
)

export default TextareaInput

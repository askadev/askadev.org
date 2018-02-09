import React from 'react'

const SelectInput = ({
  label = 'Name',
  inputRef,
  options,
  ...res
}) => (
  <fieldset>
    <label>{label}</label>
    <select ref={inputRef} {...res} >
      <option>Please choose an option</option>
      {options.map(option =>
        <option value={option.value} key={option.value}>
          {option.displayName}
        </option>
      )}
    </select>

  </fieldset>
)

export default SelectInput

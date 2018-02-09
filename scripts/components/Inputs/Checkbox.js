import React from 'react';

function stringToUnderscores(str) {
  return str
    .toLowerCase()
    .replace(/\n/g, '')
    .replace(/\s/g, '_')
    .replace(/"/g, '\"');
}

const CheckboxInput = ({label, inputRef, onClick, options, ...res}) => (
  <fieldset className="toggle">
    <label>
      <input type="checkbox" name={stringToUnderscores(label)} ref={inputRef} {...res} />
      {label}
    </label>
  </fieldset>
);

export default CheckboxInput

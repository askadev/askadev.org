import React from 'react'

import Flatpickr from 'react-flatpickr'
import moment from 'moment'

const DateInput = ({
  label = 'Event Date',
  options,
  defaultValue,
  onChange,
  ...res
}) => (
  <fieldset>
    <label>{label}</label>

    <Flatpickr
      options={{
        dateFormat: 'F j, Y',
        defaultDate: defaultValue,
        minDate: 'today',
        minTime: '07:00',
        maxTime: '23:59',
        ...options
      }}
      onChange={val => onChange(moment(val[0])) }
      {...res}
    />
  </fieldset>
)

export default DateInput

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
        enable: [date => date > new Date()],
        ...options
      }}
      onChange={val =>
        onChange(
          moment(val[0])
            .utc()
            .format()
        )
      }
      {...res}
    />
  </fieldset>
)

export default DateInput

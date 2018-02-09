import React from 'react'

import Flatpickr from 'react-flatpickr'
import moment from 'moment'

const TimeInput = ({
  label = 'Event Date',
  options,
  onChange,
  ...res
}) => (
  <fieldset>
    <label>{label}</label>

    <Flatpickr
      options={{
        minDate: 'today',
        noCalendar: true,
        time_24hr: true,
        enableTime: true,
        minTime: '07:00',
        maxTime: '23:59',
        ...options
      }}
      onChange={val => onChange( [moment(val[0]).hours(), moment(val[0]).minutes()] )}
      {...res}
    />
  </fieldset>
)

export default TimeInput

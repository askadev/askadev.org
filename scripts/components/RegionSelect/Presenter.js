import React from 'react'
import Downshift from 'downshift'

export default ({ regions = {}, onChange }) => (
  <Downshift
    onChange={onChange}
    render={({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      selectedItem,
      highlightedIndex
    }) => (
      <div>
        <input {...getInputProps({ placeholder: 'Event Region' })} />
        {isOpen ? (
          <div style={{ border: '1px solid #ccc' }}>
            {Object.keys(regions)
              .filter(
                i =>
                  !inputValue ||
                  regions[i].toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item, index) => (
                <div
                  {...getItemProps({ item })}
                  key={item}
                  style={{
                    backgroundColor:
                      highlightedIndex === index ? 'gray' : 'white',
                    fontWeight: selectedItem === item ? 'bold' : 'normal'
                  }}
                >
                  {regions[item]}
                </div>
              ))}
          </div>
        ) : null}
      </div>
    )}
  />
)

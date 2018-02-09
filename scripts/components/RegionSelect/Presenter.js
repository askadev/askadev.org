import React from 'react'
import Downshift from 'downshift'

function stateReducer(state, changes) {
  // this prevents the menu from being closed when the user
  // selects an item with a keyboard or mouse
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      }
    default:
      return changes
  }
}

export default class extends React.Component {
  state = {
    inputValue: ''
  }

  render() {
    const { regions, currentRegion, onChange } = this.props;

    return (
      <Downshift
        onChange={onChange}
        onStateChange={({ inputValue }) => this.setState({ inputValue: regions[inputValue]?.displayName || inputValue }) }
        selectedItem={regions[currentRegion]?.displayName}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex
        }) => (
          <div className="regions-search">
            <input {...getInputProps({ placeholder: 'portland' })} autoFocus={true} />
            {isOpen &&
              <div className="regions-search-wrapper">
                {Object.keys(regions)
                  .filter(
                    i =>
                      !inputValue ||
                      regions[i].displayName.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      {...getItemProps({
                        key: item,
                        item,
                        index
                      })}
                      className={`regions-search-item ${highlightedIndex === index ? '-active' : ''}`}>
                      {regions[item].displayName}
                    </div>
                  ))}
              </div>
            }
          </div>
        )}
      />
    )
  }
}

import React from 'react';

import PlacesAutocomplete from 'react-places-autocomplete';

function getPlaceDetails(placeId) {
  const request = { placeId };
  const map = new google.maps.Map(document.createElement('div'));
  const service = new google.maps.places.PlacesService(map);

  return new Promise((resolve, reject) => {
    service.getDetails(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      } else {
        reject(status);
      }
    });
  });
}

function generatePlace(placeId) {
  return getPlaceDetails(placeId).then(results => {
    const { formatted_address, formatted_phone_number, name, url, website, geometry, types } = results;

    return {
      uid: placeId,
      address: formatted_address,
      displayName: name,
      location: {
        lat: geometry.location.lat(),
        lng: geometry.location.lng()
      },
      mapsUrl: url,
      phoneNumber: formatted_phone_number || null,
      // types,
      website: website || null
    };
  });
}

const AutocompleteItem = ({ formattedSuggestion }) => {
  const secondary = formattedSuggestion.secondaryText ? formattedSuggestion.secondaryText.replace(/,\s(USA|United States|United States of America)$/g, '') : formattedSuggestion.secondaryText;

  return (
    <div>
      <strong>{formattedSuggestion.mainText}</strong>&nbsp;
      <small>{secondary}</small>
    </div>
  );
};

const Places = ({ label, value, placeholder, onChange, options, inputRef, onSelect, ...res }) => {
  const inputProps = {
    value,
    placeholder,
    onChange,
    ref: inputRef,
    name: 'places_search'
  };

  return (
    <fieldset>
      {label &&
        <label>{label}</label>
      }
      <PlacesAutocomplete
        inputProps={inputProps}
        autocompleteItem={AutocompleteItem}
        clearItemsOnError={true}
        highlightFirstSuggestion={true}
        classNames={{
          root: 'places-search',
          autocompleteContainer: 'places-search-container',
          autocompleteItem: 'places-search-item',
          autocompleteItemActive: 'places-search-item--active',
          input: ''
        }}
        options={{
          types: ['establishment', 'geocode'],
          ...options
        }}
        onSelect={onSelect}
      />
    </fieldset>
  );
};

export default class extends React.Component {
  state = {
    address: ''
  }

  handleChange = address => this.setState({ address })

  handleSelect = (address, placeId) => {
    this.setState({ address })
    generatePlace(placeId).then(val => this.props.onSelect(val))
  }

  render() {
    const { onSelect, ...res } = this.props;

    return (
      <Places
        {...{
        ...res,
        onSelect: this.handleSelect,
        onChange: this.handleChange,
        value: this.state.address,
        inputRef: val => this.node = val
      }} />
    )
  }
}

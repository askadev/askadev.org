import React from 'react';

import PlacesAutocomplete from 'react-places-autocomplete';

const AutocompleteItem = ({ formattedSuggestion }) => {
  const secondary = formattedSuggestion.secondaryText ? formattedSuggestion.secondaryText.replace(/,\s(USA|United States|United States of America)$/g, '') : formattedSuggestion.secondaryText;

  return (
    <div>
      <strong>{formattedSuggestion.mainText}</strong>&nbsp;
      <small>{secondary}</small>
    </div>
  );
};

const Places = ({ label, value, placeholder, onChange, options, inputRef, ...res }) => {
  const inputProps = {
    value,
    onChange,
    placeholder,
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
        {...res}
      />
    </fieldset>
  );
};

export default Places;

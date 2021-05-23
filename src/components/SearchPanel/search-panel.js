import React from 'react';

const SearchPanel = ( { onSearch, search } ) => {
    return (
        <div>
            <h2>SearchPanel:
            <input
                type="text"
                onChange={ (e) => {
                    onSearch(e.target.value)
                } }
                value={ search }
            /></h2>
        </div>
    );
};

export default SearchPanel;
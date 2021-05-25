import React from 'react';

const SearchPanel = ( { onSearch, search } ) => {
    return (
        <div>
            <h2>Search panel:
                <input
                    className='w-100 mt-1 px-2 py-1'
                    type="text"
                    onChange={ (e) => {
                        onSearch(e.target.value)
                    } }
                    value={ search }
                />
            </h2>
        </div>
    );
};

export default SearchPanel;
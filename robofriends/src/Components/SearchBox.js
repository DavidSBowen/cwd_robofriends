import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa3 pb4'>
            <input
                type='search'
                placeholder='search robots'
                className='pa3 mb4 ba b--green bg-lightest-blue br2'
                onChange={searchChange} />
            <hr />
        </div>
    );
}

export default SearchBox;
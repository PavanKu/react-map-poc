import React from 'react';

const SearchBox = () => {
        return (
            <p className="searchSection mapSearch">
                <input className="searchInput" type="text" placeholder="Search for places or themes" />
                <span className="searchIconMap holidaySprite"></span>
            </p>             
        );
    }

export default SearchBox;

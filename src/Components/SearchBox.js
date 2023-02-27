
import React from 'react';

const searchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input 
        className='pa3 ba b--green ng-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
        />
        </div>
        );
}


export default searchBox;

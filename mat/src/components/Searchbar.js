import React from 'react';
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchbox.css';


function SearchBar({search,onChange}) {
   
    return (
        <div className='top'>
            <input className="input" type="text" value={search} onChange={onChange}/>
        </div>
    )
}
SearchBar.propTypes={
search: PropTypes.any.isRequired,
onChange:PropTypes.func.isRequired,
}

export default SearchBar;
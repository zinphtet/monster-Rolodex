import React from "react";

import './searchBox.css'

const SearchBox = ({placeholder,inputHandler})=>{
    return (
        <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={inputHandler}
    />
    )
}

export default SearchBox
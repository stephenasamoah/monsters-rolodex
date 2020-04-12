import * as React from "react";
import './SearchBox.component.styles.css'

export const SearchBox = ({ placeholder, changeHandler }) => {
    return (
        <div className={ 'search-box' }>
            <input type="search" placeholder={ placeholder } onChange={ changeHandler }/>
        </div>
    );
};

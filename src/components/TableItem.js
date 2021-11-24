import React from "react";

const TableItem = ({onFavouriteClick, country, onCountryClick, id}) => {

    const handleClick = function() {
        onCountryClick(country);
    }

    const handleClickFavourite = function() {
        onFavouriteClick(country);
    }

    return(
        <tr key={id}>
            <td>{country.name.official}</td>
            <td>{country.population}</td>
            <td><button onClick={handleClick}>Details</button></td>
            <td><button onClick={handleClickFavourite}>Favourite</button></td>
        </tr>
    );
}

export default TableItem;

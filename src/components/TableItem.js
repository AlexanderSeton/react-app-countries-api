import React from "react";

const TableItem = ({country, onCountryClick, id}) => {

    const handleClick = function() {
        onCountryClick(country);
    }

    return(
        <tr key={id}>
            <td>{country.name.official}</td>
            <td>{country.population}</td>
            <td><button onClick={onCountryClick}>Details</button></td>
        </tr>
    );
}

export default TableItem;

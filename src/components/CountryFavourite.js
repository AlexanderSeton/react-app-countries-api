import React from "react";
import TableItem from './TableItem.js';
import "./static/CountryTable.css"

const CountryFavourite = ({favourites, onCountryClick, onFavouriteClick}) => {

    const CountriesItems = favourites.map((country, index) => {
        return <TableItem country={country} onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick} id={index} />
        console.log(CountriesItems);
    });

    return(
        <div>
            <table className="table">
                <thead>
                    <tr className="table-row">
                        <th><strong>Name</strong></th>
                        <th><strong>Population</strong></th>
                        <th><strong>Details</strong></th>
                        <th><strong>Favourite</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {CountriesItems}
                </tbody>
            </table>
        </div>
    );
};

export default CountryFavourite;

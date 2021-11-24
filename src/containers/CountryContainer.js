import React, { useState, useEffect } from "react";
import CountryDetail from "../components/CountryDetail";
import CountryFavourite from "../components/CountryFavourite";
import CountryList from "../components/CountryTable";
import "./static/CountryContainer.css"


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    let [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries();
      }, [])

    const getCountries = function() {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
                .then(countries => setCountries(countries));
    }

    const onFavouriteClick = function(country) {
        console.log("changed favourite countries:", country);
        let newArray = [...favouriteCountries, country];
        setFavouriteCountries(newArray);
        console.log("favourite countries:", favouriteCountries);
    };

    const onCountryClick = function(country) {
        console.log("changed selected country:", country);
        setSelectedCountry(country);
    };

    return(
        <div className="container">
            <CountryList countries={countries} onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick} />
            {selectedCountry ? <CountryDetail country={selectedCountry} /> :null}
            {/* {favouriteCountries ? <CountryFavourite country={favouriteCountries} onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick} /> :null} */}
            {/* {favouriteCountries.length !== 0 ? <CountryFavourite country={favouriteCountries} onFavouriteClick={onFavouriteClick} /> :null} */}
            <CountryFavourite favourites={favouriteCountries} onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick} />
        </div>
    )
}

export default CountryContainer;

import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryTable";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
      }, [])

    const getCountries = function() {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
                .then(countries => setCountries(countries));
    }

    const onCountryClick = function({country}) {
        setCountries(countries);
    };

    return(
        <CountryList countries={countries} onCountryClick={onCountryClick} />
    )
}

export default CountryContainer;

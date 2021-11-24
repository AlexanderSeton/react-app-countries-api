import React from "react";

const CountryDetail = ({country}) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        {/* <th>Currency</th> */}
                        <th>Capital</th>
                        <th>Continent</th>
                        <th>Time Zone</th>
                        <th>UN Member</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{country.name.official}</th>
                        {/* <th>{country.currencies.AFN.name}</th> */}
                        <th>{country.capital}</th>
                        <th>{country.region}</th>
                        <th>{country.timezones}</th>
                        <th>{country.unMember.toString()}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetail;

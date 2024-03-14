import fetch from 'node-fetch';

function getCountryData(countryName) {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)
        .then(response => {

            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error(`Failed to fetch country data: ${response.status}`);
            }
        })
        .then(data => {
            const countryData = {
                Name: data[0].name.common,
                Capital: data[0].capital[0],
                Population: data[0].population,
                Area: data[0].area,
                Region: data[0].region,
                Languages: Object.values(data[0].languages).join(', ')
            };
            console.log("Country Data:");
            for (const key in countryData) {
                console.log(`${key}: ${countryData[key]}`);
            }
        })
        .catch(error => {
            console.error(`Error occurred: ${error.message}`);
        });
}
getCountryData("thailand");


//everything upto this point works and fetches the name,capital,population languadge and area/reigeon of the contry in the getCountryData() function


import React, { useState } from 'react';
//testing this
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        getCountryData(searchTerm);
    };

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Enter country name..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;

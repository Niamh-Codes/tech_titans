import React, { useState } from 'react';
import AnswerCard from './AnswerCard';

const CountryData = () => {
    let getCountryData = (countryName) => {
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
                console.log("data", data); // Log the data received from the API

                // Destructure the data[0] object for convenience
                const { name, capital, population, area, region, languages } = data[0];

                // Create convenience variables for the properties
                const countryName = name.common;
                const countryCapital = capital[0];
                const countryPopulation = population;
                const countryArea = area;
                const countryRegion = region;
                const countryLanguages = Object.values(languages).join(', ');

                // Pass the data as props to the AnswerCard component
                return (
                    <AnswerCard
                        countryName={countryName}
                        countryCapital={countryCapital}
                        countryPopulation={countryPopulation}
                        countryArea={countryArea}
                        countryRegion={countryRegion}
                        countryLanguages={countryLanguages}
                    />
                );
            })
            .catch(error => {
                console.error(`Error occurred: ${error.message}`);
            });
    };

    return null; // Return JSX elements here
};

export default CountryData;
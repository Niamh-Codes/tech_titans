import React from 'react';

const CountryData = () => {
    const [matchedLanguages, setMatchedLanguages] = useState([]);

    const getCountryData = (countryName) => {
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
return <AnswerCard 
countryCapital={countryCapital} 
countryPopulation={countryPopulation} 
countryArea={countryArea} 
/>;
    
                // Use the convenience variables as needed
                console.log(countryName);
                console.log(countryCapital);
                console.log(countryPopulation);
                console.log(countryArea);
                console.log(countryRegion);
                console.log(countryLanguages);
            })
            .catch(error => {
                console.error(`Error occurred: ${error.message}`);
            });
    };

export default CountryData;
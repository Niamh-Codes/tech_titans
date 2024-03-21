import React, { useState } from "react";
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";
import { motion } from "framer-motion";
import helloArray from "./helloArray";

function MainSearch() {
  const [countryData, setCountryData] = useState({
    Name: "",
    Capital: "",
    Population: "",
    Area: "",
    Region: "",
    Languages: ""
  });

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
        const countryData1 = {
          Name: data[0].name.common,
          Capital: data[0].capital[0],
          Population: data[0].population,
          Area: data[0].area,
          Region: data[0].region,
          Languages: Object.values(data[0].languages).join(', ')
        };

        setCountryData(countryData1);

        const languages = countryData1.Languages.split(', ');
        const matchedLanguages = helloArray.filter(item => languages.includes(item.language));
        setMatchedLanguages(matchedLanguages);
      })
      .catch(error => {
        console.error(`Error occurred: ${error.message}`);
      });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-body">
      <div className="container mx-auto p-11 flex flex-col items-center lg:items-start">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
          className="text-white text-left mb-8 lg:mb-10 gap-9 text-7xl "
        >
          Search your location here.
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-11 justify-center w-full">
          <GetTranslation className="mb-10 lg:mb-4" getCountryData={getCountryData} countryData={countryData} matchedLanguages={matchedLanguages}/>
          <div className="answer-section flex justify-center space-x-5">
            {matchedLanguages.map((matchedLanguage, index) => (
              <AnswerCard key={index} countryData={countryData} matchedLanguage={matchedLanguage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSearch;
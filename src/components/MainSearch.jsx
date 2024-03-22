import React, { useState } from "react";
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";
import { motion } from "framer-motion";
import helloArray from "./helloArray";
import starYellow from "./starYellow.svg";


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
    
   <div className="mainsearch min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 lg:px-11">
      <motion.div
          className="star-yellow"
          style={{
            background: `url(${starYellow})`,
            width: '150px', 
            height: '150px',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h1
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 1 }}
          className="text-customOrange text-left mb-8 gap-9 lg:text-6xl md:text-5xl sm:text-4xl "
        >
          Search your location here.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 1 }}
          className="lg:text-4xl md:text-3xl sm:text-3xl text-white mb-8"
        >
          Let's embark on a search to uncover intriguing facts about a chosen country. As we journey through this exploration, we'll not only learn the local greeting but also gain insights into the heart of the nation through its capital, the size of its population, and the vastness of its land.
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-11 justify-center w-full">
          <GetTranslation className="mb-10 lg:mb-4" getCountryData={getCountryData} countryData={countryData} matchedLanguages={matchedLanguages}/>
            <div className="answer-section flex justify-center space-x-5">
              {matchedLanguages.length > 0 && (
                <AnswerCard key={countryData.Name} countryData={countryData} />
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default MainSearch;
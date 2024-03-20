import React,{useState} from "react";
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";
import { motion } from "framer-motion";
import helloArray from "./helloArray"

function MainSearch() {
  const [ countryData, setCountryData] = useState({Name: "",
    Capital: "",
    Population: "",
    Area: "",
    Region: "",
    Languages: ""})
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
          console.log(data);
            const countryData1 = {
                Name: data[0].name.common,
                Capital: data[0].capital[0],
                Population: data[0].population,
                Area: data[0].area,
                Region: data[0].region,
                Languages: Object.values(data[0].languages).join(', ')
            };
setCountryData(countryData1)
            const languages = countryData1.Languages.split(', ');
console.log(languages);
  
// test (countryData1);
    

            const matchedLanguages = helloArray.filter(item => languages.includes(item.language));
            console.log(matchedLanguages);
            setMatchedLanguages(matchedLanguages);
        })
        .catch(error => {
            console.error(`Error occurred: ${error.message}`);
        });
};
  return (
<<<<<<< HEAD
    <div className="mainsearch min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 lg:px-11">
=======
    <div className="h-screen flex flex-col justify-center items-center bg-body">
      <div className="container mx-auto p-11 flex flex-col items-center lg:items-start">
>>>>>>> Yaseens-branch
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
<<<<<<< HEAD
          className="subtitle w-full lg:w-1/2 mb-5 text-7xl text-white leading-tight text-center lg:text-left"
        >
          Search your location here.
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-3 text-white text-lg lg:text-2xl"
        >
          Let's embark on a search to uncover intriguing facts about a chosen country. As we journey through this exploration, we'll not only learn the local greeting but also gain insights into the heart of the nation through its capital, the size of its population, and the vastness of its land.
        </motion.h2>
=======
          className="text-white text-left mb-8 lg:mb-10 gap-9 text-7xl "
        >
          Search your location here.
        </motion.h1>
>>>>>>> Yaseens-branch
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-11 justify-center w-full">
          <GetTranslation className="mb-10 lg:mb-4" getCountryData={getCountryData} countryData={countryData} matchedLanguages={matchedLanguages}/>
          <div className="answer-section flex justify-center space-x-5">
            <AnswerCard countryData={countryData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSearch;

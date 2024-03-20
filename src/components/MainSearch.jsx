import { useState } from 'react';
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";
import { motion } from "framer-motion";

function MainSearch() {
  const [countryData, setCountryData] = useState();

  return (
    <div className="mainsearch min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 lg:px-11">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
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
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-11 justify-center w-full">
          <GetTranslation className="mb-10 lg:mb-4" setMainCountryData={setCountryData} />
          <div className="answer-section flex justify-center space-x-5">
            {countryData && <AnswerCard 
              countryCapital={countryData.Capital}
              countryPopulation={countryData.Population}
              countryArea={countryData.Area}
              countryName={countryData.Name}
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSearch;

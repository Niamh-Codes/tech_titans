import { useState } from 'react';
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";
import { motion } from "framer-motion";

function MainSearch() {
  const [countryData, setCountryData] = useState();

  return (
    <div id="search" className="h-screen flex flex-col justify-center items-center bg-body">
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

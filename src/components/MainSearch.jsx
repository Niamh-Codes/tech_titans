import React from "react";
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";
<<<<<<< HEAD
import CountryData from "./CountryData";

function MainSearch() {
  return (
    <>
      <div className="container mx-auto vh-100">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 justify-center">
      <GetTranslation />
            <div className="answer-section flex justify-center space-x-5">
              {/* <AnswerCard /> */}
              <CountryData />
            </div>
=======
import { motion } from "framer-motion";

function MainSearch() {
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
          <GetTranslation className="mb-10 lg:mb-4" />
          <div className="answer-section flex justify-center space-x-5">
            <AnswerCard />
          </div>
>>>>>>> 2d5a495c44a99a9712bc0ce8b857039e0232d7bf
        </div>
      </div>
    </div>
  );
}

export default MainSearch;

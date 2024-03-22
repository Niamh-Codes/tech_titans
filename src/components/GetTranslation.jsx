import React, { useState } from 'react';
import helloArray from './helloArray';
import AnswerCard from './AnswerCard';

const GetTranslation = (props) => {
  return (
    <div id="searchrow" className="text-customOrange bg-body flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <input className="mt-10 h-12 w-64 rounded-l-lg border-r-0 pl-4 text-black text-2xl" type="text" id="main-search" placeholder="Type your country here..." onKeyPress={(event) => {
          if (event.key === 'Enter') {
            props.getCountryData(document.querySelector('#main-search').value);
          }
        }} />
        <button className="text-black mt-10 h-12 w-16 bg-customOrange rounded-l-none rounded-r-lg " onClick={() => props.getCountryData(document.querySelector('#main-search').value)}></button>
      </div>
      <div id="helloContainer" className="justify-center mt-10 mb-10 text-customOrange bg-body w-full">
        {props.matchedLanguages.map((match,index) => (
          <div key={index} className="translation-container flex flex-col items-center justify-center p-4 mb-4 rounded-lg shadow">
            <h2 className="text-3xl mb-2">Language(s) spoken: {match.language}</h2>
            <p className="text-3xl">Hello: {match.hello}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetTranslation;

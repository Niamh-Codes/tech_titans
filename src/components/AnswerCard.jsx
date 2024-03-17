import "./AnswerCard.css";
import CountryData from "./ConvenienceVars";
import React, { useState } from 'react';

function AnswerCard({ countryCapital, countryPopulation, countryArea, countryName }) {
        return (
            <>
            <CountryData />
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="captialData">Capital of {countryName}</p>
                        </div>
                        <div className="flip-card-back text-black">
                            <p id="capitalInformation">{countryCapital}</p>
                        </div>
                    </div>
                </div>
    
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="populationData">Population of {countryName}</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="PopulationInformation">{countryPopulation}</p>
                        </div>
                    </div>
                </div>
    
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="areaData">Area of {countryName}</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="areaInformation">{countryArea}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default AnswerCard;
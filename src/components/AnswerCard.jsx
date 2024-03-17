import React from "react";
import "./AnswerCard.css";


    function AnswerCard({ countryCapital, countryPopulation, countryArea }) {
        return (
            <>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="captialData">Capital</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="capitalInformation">{countryCapital}</p>
                        </div>
                    </div>
                </div>
    
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="populationData">Population</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="PopulationInformation">{countryPopulation}</p>
                        </div>
                    </div>
                </div>
    
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="areaData">Area</p>
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
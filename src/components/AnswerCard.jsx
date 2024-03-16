import React from "react";
import "./AnswerCard.css";


    function AnswerCard({ countryCapital, countryPopulation, countryArea }) {
        return (
            <>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="data">Capital</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="information">{countryCapital}</p>
                        </div>
                    </div>
                </div>
    
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="data">Population</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="information">{countryPopulation}</p>
                        </div>
                    </div>
                </div>
    
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p id="data">Area</p>
                        </div>
                        <div className="flip-card-back">
                            <p id="information">{countryArea}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default AnswerCard;
import React from "react";
import "./styles/AnswerCard.css";

function AnswerCard(props) {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p id="capitalData lg:text-6xl md:text-5xl sm:text-4xl">Capital of {props.countryData.Name }</p>
                    </div>
                    <div className="flip-card-back text-black">
                        <p id="capitalInformation">{props.countryData.Capital}</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p id="populationData">Population of {props.countryData.Name}</p>
                    </div>
                    <div className="flip-card-back text-black">
                        <p id="PopulationInformation">{props.countryData.Population}</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p id="areaData">Area of {props.countryData.Name}</p>
                    </div>
                    <div className="flip-card-back text-black">
                        <p id="areaInformation">{props.countryData.Region}</p>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default AnswerCard;

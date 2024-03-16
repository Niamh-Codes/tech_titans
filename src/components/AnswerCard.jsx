import React from "react";
import "./AnswerCard.css";

function AnswerCard () 
{
    return (
        <>

        <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p id="data">Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p id="information">Leave Me</p>
        </div>
    </div>
</div>
        </>
    )
};

export default AnswerCard;
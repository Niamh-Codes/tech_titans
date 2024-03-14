import React from "react";
import "./FlipCard.css";

function FlipCard () 
{
    return (
        <>
        <div id="flip-card-1">
        <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
</div>

<div id="flip-card-2">
<div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
</div>

<div id="flip-card-3">
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
    </div>
</div>
        </>
    )
};

export default FlipCard;
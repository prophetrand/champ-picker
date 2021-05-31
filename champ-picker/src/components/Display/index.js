import React from 'react';
import "./style.css";

function Display(props) {
    if (props.teamComp) {
        console.log("~~~props.teamComp: ", props.teamComp)
    }
    let champResult = props.champResult;
    return (
        <div className="display">
            {champResult.name
                ? <div>
                    <img className="resultIcon" src={props.champies[champResult.icon].default} alt={champResult.name + " icon"} />
                    <h3>{champResult.name}</h3>
                </div>
                : ""}
        </div>
    );
}

export default Display;
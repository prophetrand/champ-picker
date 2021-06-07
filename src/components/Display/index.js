import React from 'react';
import "./style.css";

function Display(props) {
    
    let champResult = props.champResult;
    if (champResult.name) {
        var roleDisplay = champResult.role.join(", ")
    }

    return (
        <div>
            {champResult.name
                ? <div className="display">
                    <img className="resultIcon" src={props.champies[champResult.icon].default} alt={champResult.name + " icon"} />
                    <h3>{champResult.name}</h3>
                    <hr />
                    <p style={{fontStyle: "italic"}}>Roles: {roleDisplay}</p>
                    <p>You're playing it: <span style={{fontWeight: "bold"}}>{props.role}</span></p>
                </div>
                : ""}
        </div>
    );
}

export default Display;
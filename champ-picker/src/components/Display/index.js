import React from 'react';
import "./style.css";

function Display(props) {

    let champResult = props.champResult;
    console.log(champResult);
    return (
        <div>
            <p>{champResult.name}</p>
            {champResult.name
                ? <img src={props.champies[champResult.icon].default} alt={champResult.name + " icon"} />
                : ""}
        </div>
    );
}

export default Display;
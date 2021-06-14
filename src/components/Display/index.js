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
                    <p style={{ fontStyle: "italic" }}>Roles: {roleDisplay}</p>
                    <p>You're playing it: <span style={{ fontWeight: "bold" }}>{props.role}</span></p>
                </div>
                : ""}
            {props.teamComp.top
                ? <div className="container">
                    <div className="row">
                        <div className="card col-md-2 col-4 mx-2" >
                            <img src={props.champies[props.teamComp.top.icon].default} className="card-img-top teamIcon" alt={props.teamComp.top.name + " icon"} />
                            <div className="card-body">
                                <p className="card-text">Top: {props.teamComp.top.name}</p>
                            </div>
                        </div>

                        <div className="card col-md-2 col-4 mx-2" >
                            <img src={props.champies[props.teamComp.jg.icon].default} className="card-img-top teamIcon" alt={props.teamComp.jg.name + " icon"} />
                            <div className="card-body">
                                <p className="card-text">Jungle: {props.teamComp.jg.name}</p>
                            </div>
                        </div>

                        <div className="card col-md-2 col-4 mx-2">
                            <img src={props.champies[props.teamComp.mid.icon].default} className="card-img-top teamIcon" alt={props.teamComp.mid.name + " icon"} />
                            <div className="card-body">
                                <p className="card-text">Mid: {props.teamComp.mid.name}</p>
                            </div>
                        </div>

                        <div className="card col-md-2 col-4 mx-2">
                            <img src={props.champies[props.teamComp.bot.icon].default} className="card-img-top teamIcon" alt={props.teamComp.bot.name + " icon"} />
                            <div className="card-body">
                                <p className="card-text">Bot: {props.teamComp.bot.name}</p>
                            </div>
                        </div>

                        <div className="card col-md-2 col-4 mx-2">
                            <img src={props.champies[props.teamComp.sup.icon].default} className="card-img-top teamIcon" alt={props.teamComp.sup.name + " icon"} />
                            <div className="card-body">
                                <p className="card-text">Support: {props.teamComp.sup.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                : ""}
        </div>
    );
}

export default Display;
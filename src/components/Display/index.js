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
                ? <div>
                    {/* <div className="teamImages">
                        <img className="resultIcon" src={props.champies[props.teamComp.top.icon].default} alt={champResult.name + " icon"} />
                        <img className="resultIcon" src={props.champies[props.teamComp.jg.icon].default} alt={champResult.name + " icon"} />
                        <img className="resultIcon" src={props.champies[props.teamComp.mid.icon].default} alt={champResult.name + " icon"} />
                        <img className="resultIcon" src={props.champies[props.teamComp.bot.icon].default} alt={champResult.name + " icon"} />
                        <img className="resultIcon" src={props.champies[props.teamComp.sup.icon].default} alt={champResult.name + " icon"} />
                    </div>
                    <br />
                    <div style={{ float: "left" }}>
                        <h3>Top: {props.teamComp.top.name}</h3>


                        <h3>Jungle: {props.teamComp.jg.name}</h3>


                        <h3>Mid: {props.teamComp.mid.name}</h3>


                        <h3>Bot: {props.teamComp.bot.name}</h3>


                        <h3>Support: {props.teamComp.sup.name}</h3>
                    </div> */}
                    <div className="card" style={{width: "14rem"}}>
                        <img src={props.champies[props.teamComp.top.icon].default} className="card-img-top" alt={props.teamComp.top.name + " icon"} />
                        <div className="card-body">
                            <p className="card-text">Top: {props.teamComp.top.name}</p>
                        </div>
                    </div>

                    <div className="card" style={{width: "14rem"}}>
                        <img src={props.champies[props.teamComp.jg.icon].default} className="card-img-top" alt={props.teamComp.jg.name + " icon"} />
                        <div className="card-body">
                            <p className="card-text">Top: {props.teamComp.jg.name}</p>
                        </div>
                    </div>

                    <div className="card" style={{width: "14rem"}}>
                        <img src={props.champies[props.teamComp.mid.icon].default} className="card-img-top" alt={props.teamComp.mid.name + " icon"} />
                        <div className="card-body">
                            <p className="card-text">Top: {props.teamComp.mid.name}</p>
                        </div>
                    </div>

                    <div className="card" style={{width: "14rem"}}>
                        <img src={props.champies[props.teamComp.bot.icon].default} className="card-img-top" alt={props.teamComp.bot.name + " icon"} />
                        <div className="card-body">
                            <p className="card-text">Top: {props.teamComp.bot.name}</p>
                        </div>
                    </div>

                    <div className="card" style={{width: "14rem"}}>
                        <img src={props.champies[props.teamComp.sup.icon].default} className="card-img-top" alt={props.teamComp.sup.name + " icon"} />
                        <div className="card-body">
                            <p className="card-text">Top: {props.teamComp.sup.name}</p>
                        </div>
                    </div>
                </div>
                : ""}
        </div>
    );
}

export default Display;
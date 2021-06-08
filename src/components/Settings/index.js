import React, { useState } from 'react';
import Display from '../Display';
import "./style.css";

function Settings(props) {
  const [champResult, setResult] = useState({});
  const [teamComp, setTeam] = useState({});
  const [chosenRole, setRole] = useState("");

  const randomChoice = (pool, role) => {
    let num = Math.floor(Math.random() * pool.length);
    setRole(role);
    setTeam({});
    setResult(pool[num]);
  }

  const teamChoice = () => {

    const compTop = props.topChamps[(Math.floor(Math.random() * props.topChamps.length))];
    const compJg = props.jgChamps[(Math.floor(Math.random() * props.jgChamps.length))];
    const compMid = props.midChamps[(Math.floor(Math.random() * props.midChamps.length))];
    const compBot = props.botChamps[(Math.floor(Math.random() * props.botChamps.length))];
    const compSup = props.supChamps[(Math.floor(Math.random() * props.supChamps.length))];


    // Checking each role's assignment to make sure there are no duplicate results. Calls function again if a match is found.
    let dupliChecker = [compTop, compJg, compMid, compBot, compSup];
    for (let i = 0; i < 4; i++) {
      let checky = dupliChecker[i].name;
      for (let ii = i+1; ii < 5; ii++) {
        if(checky === dupliChecker[ii].name) {
          return teamChoice();
        }
      }
    }

    setTeam({
      top: compTop,
      jg: compJg,
      mid: compMid,
      bot: compBot,
      sup: compSup
    });

    setResult({});
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h2>Do you got the cojones to pick the championes?</h2>
        <button className="roles" style={{backgroundColor: "#3d0608"}} onClick={() => randomChoice(props.topChamps, "Top")}>Random Top</button>
        <button className="roles" style={{backgroundColor: "#100126"}} onClick={() => randomChoice(props.jgChamps, "Jungle")}>Random Jungle</button>
        <button className="roles" style={{backgroundColor: "#010726"}} onClick={() => randomChoice(props.midChamps, "Mid")}>Random Mid</button>
        <button className="roles" style={{backgroundColor: "#012426"}} onClick={() => randomChoice(props.botChamps, "Bot")}>Random Bot</button>
        <button className="roles" style={{backgroundColor: "#2b2500"}} onClick={() => randomChoice(props.supChamps, "Support")}>Random Support</button>
        <br />
        <button className="bigBadButton roles" onClick={() => randomChoice(props.allChamps, "wherever you want...")}>BIG RANDOM</button>
        <button className="bigBadButton roles" onClick={() => teamChoice()}>Random Team Comp</button>
      </div>

      <div>
        <Display 
        champResult={champResult}
        champies={props.champies}
        teamComp={teamComp}
        role={chosenRole}
        />
      </div>
    </div>

  );
}

export default Settings;
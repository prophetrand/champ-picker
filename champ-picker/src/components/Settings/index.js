import React, { useState } from 'react';
import Display from '../Display';
import "./style.css";

function Settings(props) {
  const [champResult, setResult] = useState({});
  const [teamComp, setTeam] = useState({});
  
  const randomChoice = (pool) => {
    let num = Math.floor(Math.random() * pool.length);
    setResult(pool[num]);
  }

  const teamChoice = () => {

    const compTop = props.topChamps[(Math.floor(Math.random() * props.topChamps.length))];
    const compJg = props.jgChamps[(Math.floor(Math.random() * props.jgChamps.length))];
    const compMid = props.midChamps[(Math.floor(Math.random() * props.midChamps.length))];
    const compBot = props.botChamps[(Math.floor(Math.random() * props.botChamps.length))];
    const compSup = props.supChamps[(Math.floor(Math.random() * props.supChamps.length))];

    let dupliChecker = [compTop, compJg, compMid, compBot, compSup];
    for (let i = 0; i < 4; i++) {
      let checky = dupliChecker[i].name;
      for (let ii = i+1; ii < 5; ii++) {
        if(checky == dupliChecker[ii].name) {
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
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h2>Do you got the cojones to pick the championes?</h2>
        <button onClick={() => randomChoice(props.topChamps)}>Random Top</button>
        <button onClick={() => randomChoice(props.jgChamps)}>Random Jungle</button>
        <button onClick={() => randomChoice(props.midChamps)}>Random Mid</button>
        <button onClick={() => randomChoice(props.botChamps)}>Random Bot</button>
        <button onClick={() => randomChoice(props.supChamps)}>Random Support</button>
        <br />
        <button className="bigBadButton" onClick={() => randomChoice(props.allChamps)}>BIG RANDOM</button>
        <button className="teamButton" onClick={() => teamChoice()}>Random Team Comp</button>
      </div>

      <div>
        <Display 
        champResult={champResult}
        champies={props.champies}
        teamComp={teamComp}
        />
      </div>
    </div>

  );
}

export default Settings;
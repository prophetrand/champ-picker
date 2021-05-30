import React, { useState } from 'react';
import Display from '../Display';
import "./style.css";

function Settings(props) {
  const [champResult, setResult] = useState({});
  const randomChoice = (pool) => {
    let num = Math.floor(Math.random() * pool.length);
    console.log(num);
    console.log(pool[num]);
    setResult(pool[num]);
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
      </div>

      <div>
        <Display 
        champResult={champResult}
        champies={props.champies}
        />
      </div>
    </div>

  );
}

export default Settings;
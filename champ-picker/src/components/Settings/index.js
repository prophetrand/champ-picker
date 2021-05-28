import React from 'react';
import "./style.css";

function Settings(props) {

  console.log("From Settings component, props.botChamps:", props.botChamps)

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h2>Do you got the cojones to pick the championes?</h2>
        <button>Random Top</button>
        <button>Random Jungle</button>
        <button>Random Mid</button>
        <button>Random Bot</button>
        <button>Random Support</button>
      </div>
    </div>

  );
}

export default Settings;
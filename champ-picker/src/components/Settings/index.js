import React from 'react';

function Settings(props) {

  console.log("From Settings component, props.botChamps:", props.botChamps)

  return (
    <div>
      <p>pop pop</p>
      <button>Random Top</button>
      <button>Random Jungle</button>
      <button>Random Mid</button>
      <button>Random Bot</button>
      <button>Random Suppport</button>
    </div>

  );
}

export default Settings;
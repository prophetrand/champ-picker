import React from 'react';
import allChamps from "./champs.json";
import Settings from "./components/Settings";

function App() {

  console.log(allChamps[0]);

  var topChamps = [];
  var jgChamps = [];
  var midChamps = [];
  var botChamps = [];
  var supChamps = [];

  // Callback function in forEach checks allChamps (champs.json) for every champ's roles and sorts each champ object into the appropriate array to be passed as props.
  allChamps.forEach(champ => {
    if (champ.role.includes("top")) {
      topChamps.push(champ);
      console.log("Success! Planted:", champ.name);
    }

    if (champ.role.includes("jg")) {
      jgChamps.push(champ);
      console.log("Success! Planted:", champ.name);
    }

    if (champ.role.includes("mid")) {
      midChamps.push(champ);
      console.log("Success! Planted:", champ.name);
    }

    if (champ.role.includes("bot")) {
      botChamps.push(champ);
      console.log("Success! Planted:", champ.name);
    }

    if (champ.role.includes("sup")) {
      supChamps.push(champ);
      console.log("Success! Planted:", champ.name);
    }
  });

  console.log("Top champs in the bucket:", topChamps);
  console.log("Jg champs in the bucket:", jgChamps);
  console.log("Mid champs in the bucket:", midChamps);
  console.log("Bot champs in the bucket:", botChamps);
  console.log("Sup champs in the bucket:", supChamps)

  // Function to import all images from ./champies/ directory for use in the webapp. Could move this import to other components, could improve performance.
  const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  // Calling importAll on the ./champies/ directory and saving the resulting object to the variable champies.
  const champies = importAll(require.context('./champies', false, /\.(jpg)$/));
  console.log("Champies!!:", champies);

  return (
    <div className="App">
      <header>
        Boglobob
      </header>
      <Settings />
      {allChamps.map((e) => (
        <div>
          <img src={champies[e.icon].default} alt={e.name + " icon"} />
          <h2>{e.name}</h2>
        </div>
      ))}

    </div>
  );
}

export default App;
import React from 'react';
import allChamps from "./champs.json";
// import allPics from "./champies";

function App() {

  console.log(allChamps[0]);

  var topChamps = [];
  allChamps.forEach(champ => {
    if (champ.role.includes("top")) {
      topChamps.push(champ);
      console.log("Success! Planted:", champ.name);
    }
  });
  console.log(topChamps);

  const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  const champies = importAll(require.context('./champies', false, /\.(jpg)$/));
  console.log("Champies!!:", champies);

  return (
    <div className="App">
      <header>
        Boglobob
      </header>

      {allChamps.map((e) => (
        <div>
          <img src={champies[allChamps[15].icon].default} alt={e.name + " icon"} />
          <h2>{e.name}</h2>
        </div>
      ))}

    </div>
  );
}

export default App;
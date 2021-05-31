import React, { useEffect, useState } from 'react';
import allChamps from "./champs.json";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  const [topChamps, setTop] = useState([]);
  const [jgChamps, setJg] = useState([]);
  const [midChamps, setMid] = useState([]);
  const [botChamps, setBot] = useState([]);
  const [supChamps, setSup] = useState([]);

  let topLoad = [];
  let jgLoad = [];
  let midLoad = [];
  let botLoad = [];
  let supLoad = [];

  function loadChamps() {

    // Callback function in forEach checks allChamps (champs.json) for every champ's roles and sorts each champ object into the appropriate array to be passed as props.
    allChamps.forEach(champ => {
      if (champ.role.includes("top")) {
        topLoad.push(champ);
      }

      if (champ.role.includes("jg")) {
        jgLoad.push(champ);
      }

      if (champ.role.includes("mid")) {
        midLoad.push(champ);
      }

      if (champ.role.includes("bot")) {
        botLoad.push(champ);
      }

      if (champ.role.includes("sup")) {
        supLoad.push(champ);
      }
    });
    console.log("Top champs in the bucket:", topLoad);
    console.log("Jg champs in the bucket:", jgLoad);
    console.log("Mid champs in the bucket:", midLoad);
    console.log("Bot champs in the bucket:", botLoad);
    console.log("Sup champs in the bucket:", supLoad)

    setTop(topLoad);
    setJg(jgLoad);
    setMid(midLoad);
    setBot(botLoad);
    setSup(supLoad);
  }

  useEffect(() => {
    loadChamps();
  }, []);

  // Function to import all images from ./champies/ directory for use in the webapp. Could move this import to other components, could improve performance.
  const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  // Calling importAll on the ./champies/ directory and saving the resulting object to the champies array. Each object in the array represents an icon image file, one for each champ in champs.json.
  const champies = importAll(require.context('./champies', false, /\.(jpg)$/));
  console.log("Champies!!:", champies);

  return (
    <div>
      <div className="App">
        <Settings
          champies={champies}
          allChamps={allChamps}
          topChamps={topChamps}
          jgChamps={jgChamps}
          midChamps={midChamps}
          botChamps={botChamps}
          supChamps={supChamps}
        />

        {/* {allChamps.map((e) => (
        <div>
          <img src={champies[e.icon].default} alt={e.name + " icon"} />
          <h2>{e.name}</h2>
        </div>
      ))} */}
      </div>
    </div>
  );
}

export default App;
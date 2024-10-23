import React, { useState } from "react";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";
import { ipcRenderer } from "electron";

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [deltaMods, setDeltaMods] = useState({});
  const [betaMods, setBetaMods] = useState({});

  const handleStartNewGame = (data) => {};
  const handleQuit = () => icpRenderer.send("app-quit");
  return (
    <AppContext.Provider
      value={{
        currGame,
        setCurrGame,
        deltaMods,
        setDeltaMods,
        betaMods,
        setBetaMods,
      }}
    >
      <div>MarketManipulators</div>
      <button onClick={handleQuit}>Quit</button>
    </AppContext.Provider>
  );
};

export default MarketManipulators;

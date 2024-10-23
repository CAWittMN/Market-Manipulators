import React, { useState } from "react";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);
  const [newMonthData, setNewMonthData] = {};

  const handleStartNewGame = (data) => {};
  return (
    <AppContext.Provider
      value={{ currGame, setCurrGame, newMonthData, setNewMonthData }}
    >
      <div>MarketManipulators</div>;
    </AppContext.Provider>
  );
};

export default MarketManipulators;

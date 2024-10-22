import React, { useState } from "react";
import AppContext from "./context/AppContext";
import GameApi from "./GameApi";

const MarketManipulators = () => {
  const [currGame, setCurrGame] = useState(null);

  const handleStartNewGame = (data) => {};
  return (
    <AppContext.Provider value={{ currGame, setCurrGame }}>
      <div>MarketManipulators</div>;
    </AppContext.Provider>
  );
};

export default MarketManipulators;

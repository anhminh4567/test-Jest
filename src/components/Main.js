import React, { useState } from "react";
import { Players } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";

export default function Main() {
  const [player, setPlayer] = useState(Players);
  return <PlayersPresentation players={player} />;
}

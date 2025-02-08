import { players } from "../../players";
import PlayerItem from "../playerItem/PlayerItem";
import "./style.css";
function Players() {
  return (
    <div id="players">
      {players.map((elt, i) => (
        <PlayerItem key={i} {...elt} />
      ))}
    </div>
  );
}

export default Players;

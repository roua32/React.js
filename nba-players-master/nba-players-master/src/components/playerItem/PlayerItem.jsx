import PropTypes from "prop-types";
import "./style.css";
function PlayerItem({ playerImage, playerName, playerRate, bg }) {
  return (
    <div id="palayerItem">
      <div
        style={{ backgroundColor: bg, display: "flex", alignItems: "flex-end" }}
      >
        <img src={playerImage} alt="" />
      </div>
      <h1>
        {" "}
        {playerName} - {playerRate}{" "}
      </h1>
    </div>
  );
}
PlayerItem.propTypes = {
  playerImage: PropTypes.string,
  playerName: PropTypes.string,
  playerRate: PropTypes.number,
};

export default PlayerItem;

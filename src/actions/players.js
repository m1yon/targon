export const CHANGE_CURRENT_PLAYER = "CHANGE_CURRENT_PLAYER";

export const changeCurrentPlayer = (playerName) => ({
  type: "CHANGE_CURRENT_PLAYER",
  playerName
});
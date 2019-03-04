export default (state = {}, action) => {
  switch(action.type) {
    case "CHANGE_CURRENT_PLAYER":
      return {
        ...state,
        "currentPlayer": action.playerName
      };

    default:
      return state;
  };
};
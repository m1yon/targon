import { requestGet, recieveGetSuccess } from "./get";

// Fetches all players
export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(requestGet("players"));
    return fetch("/api/getPlayers")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(data => dispatch(
        recieveGetSuccess("players", {
          ...data
        })
      )
    )
  }
}



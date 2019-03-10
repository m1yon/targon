import { requestGet, recieveGetSuccess } from "./get";

// Fetches a specific player
export const fetchPlayer = (player) => {
  return (dispatch) => {
    dispatch(requestGet());
    return fetch("/api/player/" + player)
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(data => dispatch(
        recieveGetSuccess({
          "players": {
            ...data
          }
        })
      )
    )
  }
}



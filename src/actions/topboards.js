export const FETCH_PLAYERS = "FETCH_TOPBOARD";
import { requestGet, recieveGetSuccess } from "./get";

// Fetches a specific 
export const fetchTopboard = () => {
  return (dispatch) => {
    dispatch(requestGet());
    return fetch("/api/topBoardKills")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(data => dispatch(
        recieveGetSuccess({
          "kills": {
            ...data
          }
        })
      )
    )
  }
}
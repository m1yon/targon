import { requestGet, recieveGetSuccess } from "./get";

// Fetches a specific topboard
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
          "topboards": {
            "kills": {
              ...data
            }
          }
        })
      )
    )
  }
}
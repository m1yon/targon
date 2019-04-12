import { requestGet, recieveGetSuccess } from "./get";

// Fetches all TopBoards
export const fetchTopboards = () => {
  return (dispatch) => {
    dispatch(requestGet("topBoards"));
    return fetch("/api/topBoards/players")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(data => dispatch(
        recieveGetSuccess("topBoards", {
          ...data.topBoards
        })
      )
    )
  }
}
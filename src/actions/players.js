export const FETCH_PLAYERS = "FETCH_PLAYERS";
export const GET_PLAYERS = "GET_PLAYERS";
export const REQUEST_GET = "REQUEST_GET";
export const RECIEVE_GET = "RECIEVE_GET";

// Request has began
export const requestGet = () => {
  return {
    type: "REQUEST_GET"
  }
}

// Request finished successfully
export const recieveGet = (result) => {
  return {
    type: "RECIEVE_GET",
    result,
    receivedAt: Date.now()
  }
}

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
        recieveGet({
          "players": {
            ...data
          }
        })
      )
    )
  }
}

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
        recieveGet({
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

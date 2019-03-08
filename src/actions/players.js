export const FETCH_PLAYERS = "FETCH_PLAYERS";
export const GET_PLAYERS = "GET_PLAYERS";
export const REQUEST_GET = "REQUEST_GET";
export const RECIEVE_GET_SUCCESS = "RECIEVE_GET_SUCCESS";
export const RECIEVE_GET_FAILED = "RECIEVE_GET_FAILED";


// Request has began
export const requestGet = () => {
  return {
    type: "REQUEST_GET"
  }
}

// Request finished successfully
export const recieveGetSuccess = (result) => {
  return {
    type: "RECIEVE_GET_SUCCESS",
    result,
    receivedAt: Date.now()
  }
}

// Request finished successfully
export const recieveGetFailed = (error) => {
  return {
    type: "RECIEVE_GET_FAILED",
    error,
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
        recieveGetSuccess({
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

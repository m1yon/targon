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


export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(requestGet());
    return fetch("/api/player/Sneaky")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(json => dispatch(recieveGet(json))
    )
  }
}

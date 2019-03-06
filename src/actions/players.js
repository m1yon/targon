export const FETCH_PLAYERS = "FETCH_PLAYERS";
export const GET_PLAYERS = "GET_PLAYERS";
export const REQUEST_GET = "REQUEST_GET";
export const RECIEVE_GET = "RECIEVE_GET";

export const getPlayers = () => ({
  type: "GET_PLAYERS"
});

export const requestGet = () => {
  return {
    type: "REQUEST_GET"
  }
}

export const recieveGet = (result) => {
  return {
    type: "RECIEVE_GET",
    result
  }
}

export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(requestGet());
    return fetch("api/players/Tyler1")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(json => dispatch(receivePosts(json))
    )
  }
}

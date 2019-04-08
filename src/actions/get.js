export const REQUEST_GET = "REQUEST_GET";
export const RECIEVE_GET_SUCCESS = "RECIEVE_GET_SUCCESS";
export const RECIEVE_GET_FAILED = "RECIEVE_GET_FAILED";

// Request has began
export const requestGet = (parent) => {
  return {
    type: "REQUEST_GET",
    result: {
      [parent]: {
        "isFetching": true,
        "data": {

        }
      }
    }
  }
}

// Request finished successfully
export const recieveGetSuccess = (parent, data) => {
  return {
    type: "RECIEVE_GET_SUCCESS",
    result: {
      [parent]: {
        "isFetching": false,
        data
      }
    },
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
import React, { useState, useEffect } from "react";
import { connect } from "react-redux"

const Loading = ({ isFetchingPlayers, isFetchingTopBoards, component, quickLoad }) => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return(
    <div>
      { 
        (!isFetchingPlayers && !isFetchingTopBoards && !loading) ||
        (!isFetchingPlayers && !isFetchingTopBoards && quickLoad) ?
          component
        :
        <div className="spinner"></div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    isFetchingPlayers: state.players.isFetching,
    isFetchingTopBoards: state.topBoards.isFetching
  })
};

export default connect(mapStateToProps)(Loading);
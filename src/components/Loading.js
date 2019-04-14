import React, { useState, useEffect } from "react";
import { connect } from "react-redux"

const Loading = ({ isFetching, component, quickLoad }) => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return(
    <div>
      { 
        (!isFetching && !loading) ||
        (!isFetching && quickLoad) ?
          component
        :
        <div className="spinner__container"><div className="spinner"></div></div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    isFetching: state.isFetching,
  })
};

export default connect(mapStateToProps)(Loading);
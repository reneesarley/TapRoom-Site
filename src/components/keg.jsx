import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div>
      <p>Keg </p>
      <h4>{props.name}</h4>
    </div>
  );
}

Keg.propTypes= {
  name: PropTypes.string
};

export default Keg;

import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div className='col-sm-4'>
      <h4>{props.name} {props.brewer} ${props.price}</h4>
        <p>{props.description} <br/>
        abv: {props.abv}</p>

    </div>
  );
}

Keg.propTypes= {
  name: PropTypes.string
};

export default Keg;

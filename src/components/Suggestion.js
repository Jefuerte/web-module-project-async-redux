import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSuggestion, addFavorite } from './../actions';
import './Favorites.css';

const Suggestion = (props) => {

  useEffect(()=>{
   props.dispatch(getSuggestion())
  },[]);

  if (props.state.isFetching) {
    return <p className='suggestion'>Fetching your suggestion...</p>;
  }
  if (props.state.error) {
    return <h2 className='suggestion'>Error: {props.state.error}</h2>;
  }
  
  const handleClick = () =>{
    props.dispatch(getSuggestion())
  }
  const handleClick2 = () =>{
    props.dispatch(addFavorite({activity:props.state.suggestion.activity, type:props.state.suggestion.type, id:props.state.suggestion.id}))
    props.dispatch(getSuggestion())
  }

  return (
    <>
      <div className='suggestion'>
        <div className="text">
          <h2>Suggestion:</h2>
          <p>{props.state.suggestion.activity}</p>
          <p>Activity Type: {props.state.suggestion.type}</p>
          <div className="buttons">
            <button id='newSug' onClick={handleClick}>New Suggestion</button>
            <button id='addFav' onClick={handleClick2}>Add Favorite</button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
   state
  };
};

export default connect(mapStateToProps)(Suggestion);
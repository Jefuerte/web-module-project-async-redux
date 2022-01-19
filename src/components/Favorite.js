import React from 'react';
import { connect } from 'react-redux';
import { deleteFavorite }from './../actions';
import './Favorites.css'



const Favorite = (props) => {

console.log('props from fav',props)
const handleClick = () =>{
    props.dispatch(deleteFavorite(props.id))
}

  return (
    <>
      {
      props.id &&  
      <div className='favorite'>
        <button onClick={handleClick}>-</button>
        <p>{props.activity}</p>
      </div>
      }
    </>
  );
};

const mapStateToProps = state => {
  return {
   state
  };
};

export default connect(mapStateToProps)(Favorite);
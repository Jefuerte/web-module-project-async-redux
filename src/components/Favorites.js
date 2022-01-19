import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css'
import Favorite from './Favorite'


const Favorites = (props) => {

console.log('props from favs',props.state.favorites)

  if (props.state.favorites.length===0) {
    return <p className='suggestion'>No favorites added. Add favorites to this list.</p>;
  }

  return (
    <>
      <div className='favorites'>
        <div className="text">
          <h2>Favorites</h2>
          {props.state.favorites.map(favorite => <Favorite activity={favorite.activity} key={favorite.id} id={favorite.id}/>)}
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

export default connect(mapStateToProps)(Favorites);
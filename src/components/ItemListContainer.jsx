import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

  const {greeting} = props
  
    return (
      <div className="item-list-container">
        <h1 >{greeting}</h1>
      </div>
    );
  }
  
  export default ItemListContainer;

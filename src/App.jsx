import { useState } from 'react'
import './App.css'
/* React bootstrap =The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  return (
    <div className='App'>
     <NavBar /> 
     <ItemListContainer greeting={"Bienvenidos a la tienda de platillos de bateria"} />
    </div>
  )
}


export default App


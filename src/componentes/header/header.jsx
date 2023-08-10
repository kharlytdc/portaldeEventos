import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../../estilosgenerales.css'
import './header.css'
import Login from '../Login'

const Encabezado = () => {
  return (
    <div className='header'>

      <div className='blanco'>PORTAL DE EVENTOS</div>
      <MenuEnlaces />
      <Login />

    </div>
  )
}

export default Encabezado
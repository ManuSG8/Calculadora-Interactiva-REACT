import React from 'react'
import '../styles/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    // Si cumple todas esas condicines significa que es un operador (+ - * /) entonces devuelve true
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton
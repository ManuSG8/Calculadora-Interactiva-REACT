import React from 'react'
import '../styles/Pantalla.css'

// Otra alternativa de definir los componentes (*RECUERDA* con => ya indicamos que vamos a retornar ese valor)
const Pantalla = ({ input }) => (
  <div  className='input'>
    {input}
  </div>
)

export default Pantalla
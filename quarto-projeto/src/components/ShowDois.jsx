import React from 'react'

const ShowDois = ({time, pais, numero}) => {
  return (
    <div style={{backgroundColor: "red", color: "white", width: "500px"}}>
       <h1>ShowDois</h1>
       <h2>O time atual é: {time}</h2>
       <h2>Fica no pais: {pais}</h2>
       <h2>E a posição na tabela é {numero}</h2>
        </div>
  )
}

export default ShowDois;
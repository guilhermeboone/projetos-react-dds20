import React, { useState } from 'react'
import CardCantores from '../components/CardCantores'

const MostrarCantores = () => {
const cantores = useState ([
    {id:1, nome: "DJ Cleiton Rasta", genero: "Reagge", PremioMelhor:false, posicao:100},
    {id:2, nome: "Michael Jackson", genero: "Pop", PremioMelhor:true, posicao:1},
    {id:3, nome: "DJ Cleiton Rasta", genero: "Reagge", PremioMelhor:false, posicao:90},
])
  return (
    <div>
        <h1>MostrarCantores</h1>
        {cantores.map((cantor)=>(
            <CardCantores 
            key={cantor.id}
            name={cantor.nome} 
            gender={cantor.genero} 
            thebest={cantor.PremioMelhor} 
            posicao={cantor.posicao}/>
        ))}
    </div>
  )
}

export default MostrarCantores
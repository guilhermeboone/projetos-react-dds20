import React from 'react'
import CardCantores from "..components/CardCantores";

const CardCantores = (name, gender, thebest, posicao) => {
  return (
    <div>
        <h3>O nome do cantor é: {name}</h3>
        <h3>Seu genero musical é: {gender}</h3>
        <h3>Sua posição no ranking global é: {posicao}</h3>
        {thebest && <h3>Já foi o melhor do mundo: </h3>}
        </div>
  )
}

export default CardCantores
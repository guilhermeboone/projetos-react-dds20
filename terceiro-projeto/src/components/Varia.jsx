import { useState } from "react"

const Varia = () => {
  // Variável padrão
  let itgo = "Shazam"
  let numero = 11

  // Variável com hook useState
  const [number, setNumber] = useState(9)
  const [hero, setHero] = useState("Homem Aranha")
  return (
    <div>
        {/* USO DE VARIÁVEIS PADRÃO  */}
        <p>A palavra sorteada foi: {itgo}</p>
        <h1>{numero}</h1>
        <button onClick={() => {numero++}}>
            Aumentar contagem
        </button>

        {/* USO DE VARIÁVEIS A PARTIR DE AGORA */}
        <h1>{number}</h1>
        <button onClick={() => {setNumber(number + 2)}}> + </button>
        <button onClick={() => {setNumber(9)}}> Resetar </button>
        <button onClick={() => {setNumber(number - 2)}}> / </button>

        {/* CRIE UM TÍTULO COM NOME DE HERÓI, 
        E UM BOTÃO QUE REVELE SUA IDENTIDADE SECRETA */}
        <h1>{hero}</h1>
        <button onClick={() => {setHero("Miles Morales")}}> Revelar Identidade </button>
    </div>
  )
}

export default Varia
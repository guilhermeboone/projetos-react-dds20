        {/* Uso de variaveis a partir de agora */}
import { useState } from "react"

const Varia = () => {
    // Veriavel padrao
    let itgo = "Shazam"
    let numero = 10

    //Variavel com hook useState
    const [number,setNumber, sim, diminuir] =useState(9)
    const [heroi, setHeroi] = useState("Superman")
  return (
    <div>
        {/* Uso de variaveis padrão */}
        <p>A palavra sorteada foi {itgo}</p>
        
        <button onClick={()=>{
            numero++
            console.log(numero);
        }}>
            Aumentar contagem
        </button>
        <h1>11</h1>

        {/* Uso de variaveis a partir de agora */}
        <button onClick={()=> {
            setNumber (number+ 2)
        }}>
            Aumentar
        </button>
        <h1>{number}</h1>

        {/* Uso de variaveis a partir de agora */}

        <button onClick={()=> {
            setNumber (9)
        }}>
            reset
        </button>
        <h1>{sim}</h1>

        {/* Uso de variaveis a partir de agora */}
        <button onClick={()=> {
            setNumber (number - 2)
        }}>
            diminuir
        </button>
        <h1>{diminuir}</h1>

        {/* Uso de variaveis a partir de agora */}
        <button onClick={()=> {
            setHeroi (<p>P. Coutinho</p>);
        }}>
            revele a ID do heroi
        </button>
        <h1>{heroi}</h1>
        </div>
        
  )
}

export default Varia
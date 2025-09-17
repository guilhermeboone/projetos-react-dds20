import React from 'react'

const Event = () => {
  
    const teste = (e) => {
        console.log("Funcionou sim, parabéns");

        // e = Propriedades do event 
        console.log(e);
        
    }
  
    return (
    <div>
        {/* Função inline  */}
        <button onClick={() => {console.log("Cliquei") }}>          
            Clique aqui
        </button>
       
        {/* Função externa ao elemento  */}
        <button onClick={teste}> Aqui também</button>
    </div>
  )
}

export default Event
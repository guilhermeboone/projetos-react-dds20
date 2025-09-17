import {useState} from 'react'
const Listagem = () => {
    const [lista, setLista] = useState (["Pedro", "Cris", "Manoel", "Altair", "Moacyr"])

    const [jogadores] = useState ([
        { id:1, nome: "kaka", time: "Milan", number: 8}, 
        { id:2, nome: "Bruno Henrique", time: "Wolfsburg", number: 23},
        { id:3, nome: "Di Stefano", time: "Real Madrid", number: 10},
    ]);

    const [numero, setNumero] = useState (1)

  return (
    <div>

    <button onClick={()=>{
        setNumero(numero+1)
        console.log([...lista]);
        setLista([...lista, numero])
        
    }}>
        Adicionar a Lista
    </button>

        {/* Usando map para percorrer array e criar novos elementos HTML com base na lista */}
     <h3>Listagem</h3>
    <ul>
        <li>João Lucas</li>
        <li>Marcelo</li>
        {
            lista.map((valor,index)=>(<li key={index}>{valor}</li>))}
    </ul> 
    <h3>Lista de jogadores</h3>
        {
            jogadores.map ((jogador)=> (
            <h3 key={jogador.id}>
                O jogador {jogador.nome} jogou no time {jogador.time} com a camisa número {jogador.number}
            </h3>
            ))}
</div>
  )
}

export default Listagem
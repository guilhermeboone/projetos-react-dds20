import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>Meu incrivel componente</h1>
        <p>Paragrafo do componente</p>

        {/* Css usando classe */}
        <p className="azul"> Este aqui não vai vazar </p>

        {/* css inline */}
        <h2 style={{color:"blue", backgroundColor: "pink", fontSize: "100px"}}>
            Texto bom 
        </h2>
    </div>
  )
}

export default MyComponent
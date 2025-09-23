import React from 'react'
import Show from '../components/Show'
import ShowDois from '../components/ShowDois';
const MostrarCoisas = () => {
  return (
    <div>
        <h1>MostrarCoisas</h1>
{/* chamando o componente Show, passando uma propriedade name com um valor */}
<Show name= {"Cristiano"}></Show>
<Show name= {"Dembele"}></Show>

{/* chamando o componente ShowDois, passando algumas propriedades */}
<ShowDois time= "Manchester Sim" pais="Inglaterra" numero="3"> </ShowDois>
<ShowDois time= "Real Madrid" pais="Espanha" numero="1"> </ShowDois>
<ShowDois time= "Milan" pais="Italia" numero="2"> </ShowDois>
    </div>
  );
};

export default MostrarCoisas;
import React from "react";

import ImgNeymar from "../assets/ney.jpg"

const MostrarImagens = () => { 
    return (
    <div>
      {/* Imagens via link externo  */}
      <h3>Goku SSJ</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLJ_JSdhSaPI9_3w4pkmBZU5EPoreeYcWA&s"
        alt=""
        width={900}
        height={500}
      />

      {/* Imagens via pasta assets  */} 
      <h3>Ousado, pai e alegre</h3>
      <img src={ImgNeymar} alt="" width={900} height={500} />

      {/* Imagens via pasta pública  */}
      <h3>Flores chuva de prata</h3>
      <img src="../chuvadeprata.jpg" alt="" width={900} height={500}/>
    </div>
  );
};

export default MostrarImagens;

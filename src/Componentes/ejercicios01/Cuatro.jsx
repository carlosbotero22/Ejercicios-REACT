import React from 'react';

const Cuatro = () => {

  let contador = 0

  function restarNumero() {
    if(contador>-10){
        contador -=1
        document.getElementById("contadorDos").innerText = contador
    }
  }
  function sumarNumero() {
    if(contador<10){
        contador +=1
        document.getElementById("contadorDos").innerText = contador

    }
  }

  return (
    <div>
      <h1 id='contadorDos'>{contador}</h1>

      <button onClick={restarNumero}>Restar</button>
      <button onClick={sumarNumero}>Sumar</button>
      

      
    </div>
  );
};

export default Cuatro;
import React from 'react';

const Tres = () => {

 let contador = 0

 function sumarNumero() {
    contador += 1
    // console.log(contador);
    document.getElementById("contador").innerText = contador
 }
  return (
    <div>
      <h1>tercero</h1>
      
      <h1
      id='contador'>{contador}</h1>
      <button onClick={sumarNumero}>[contador]</button>
    </div>
  );
};

export default Tres;
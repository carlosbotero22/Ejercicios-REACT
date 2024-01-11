import {useState} from 'react';

const Cinco = () => {

  const [contador, setContador] = useState(0)

  function restar() {
    setContador(contador-1)
  }

  function sumar() {
    setContador(contador+1)
  }

  
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={restar} disabled={contador===-10}>Restar</button>
      <button onClick={sumar} disabled={contador===+10}>Sumar</button>
      
    </div>
  );
};

export default Cinco;
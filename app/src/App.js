import React, {useState} from 'react';

import Propriedade from './Propriedade'
import PropriedadeNovo from './PropriedadeNovo';
import Estado from './Estado';

export default function App() {
const [count, setCounter] = useState(0);

function increment(){
  setCounter(count+1);
}

  return (
    <div>
    <Propriedade title="Conceito de Propriedade"></Propriedade>
    <PropriedadeNovo>Conceito de Propriedade 2</PropriedadeNovo>
    <Estado>
      Counter: {count}
    </Estado>
    <button onClick={increment}>Add</button>
    </div>
  );
}
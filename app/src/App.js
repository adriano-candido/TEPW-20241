import React from 'react';

import Propriedade from './Propriedade'
import PropriedadeNovo from './PropriedadeNovo';
import Estado from './Estado';

export default function App() {
let count = 0;

function increment(){
  count++;
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
import React, {useState} from 'react';
import './App.css';

import Sorteio from './components/Sorteio';
import Numero from './components/Numero';
import Desafio from './components/Desafio';
import Propriedades from './components/Propriedades';
import Recesso from './components/Recesso';

function App() {

  const [num, setNum] = useState(10);
  return (
    <div className='App'>
      <h1>PROJETO AVALIATIVO REACT-REDUX 2º BIMESTRE</h1>

      <div className='linha'>
        <Desafio num={num}></Desafio>
      </div>

      <div className='linha'>
        <Numero num={num} onNumChanged={setNum}></Numero>
      </div>

      <div className='linha'>
        <Propriedades titulo='QUAL SUA NOTA?' aluno='Rafael Malaquias' num={num}></Propriedades>
      </div>

      <div className='linha'>
        <Sorteio num={num}></Sorteio>
      </div>

      <div className='linha'>
        <Recesso num={num}></Recesso>
      </div>

    </div>
  );
}

export default App;

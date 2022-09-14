import * as React from 'react';
import { useState } from 'react';
//import { CounterRegex } from './CounterRegex.js';
import './style.css';

function getVowels(str) {
  var m = str.match(/[aãáàâeèéêiíoôõóuú]/gi);
  return m === null ? 0 : m.length;
}
function getConsoants(str) {
  var m = str.match(/[bcçdfghjklmnpqrstvwxsyz]/gi);
  return m === null ? 0 : m.length;
}

export default function App() {
  const [texto, setTexto] = useState('');
  const handleChangeInputTexto = (evt) => {
    setTexto(evt.target.value);
  };
  //const regexVowels = /[aãáàâeèéêiíoôõóuú]/gi;
  //const regexConsonants = /[bcçdfghjklmnpqrstvwxsyz]/gi;
  return (
    <div className="App">
      <h2>Vowels and Consonants</h2>
      <input
        placeholder="Enter a word"
        type="text"
        value={texto}
        onChange={handleChangeInputTexto}
      />
      {/*<CounterRegex title="Vowels" text={texto} regex={regexVowels} />
      <CounterRegex title="Consonants" text={texto} regex={regexConsonants} />*/}
      <h3>Vowels: {getVowels(texto)}</h3>
      <h3>Consonants: {getConsoants(texto)}</h3>
    </div>
  );
}

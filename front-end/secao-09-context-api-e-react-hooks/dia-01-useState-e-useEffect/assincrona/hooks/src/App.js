import React, { useState } from 'react';
import './App.css';

function App() {
  const [ fullName, setFullName ] = useState('');
  const [ age, setAge ] = useState(0);
  const [ city, setCity ] = useState('');
  const [ module, setModule ] = useState('');

  return (
    <section className="App">
      <form>
        <fieldset>
        <legend>Dados Pessoais</legend>

        <label htmlFor="fullname-input">
          Nome completo:
          <input
            id="fullname-input"
            name="fullName"
            onChange={ ({ target: { value } }) => setFullName(value) }
            type="text"
            value={ fullName }
          />
        </label>

        <label htmlFor="age-input">
          Idade:
          <input
            id="age-input"
            name="age"
            onChange={ ({ target: { value } }) => setAge(value) }
            type="number"
            value={ age }
          />
        </label>

        <label htmlFor="city-input">
          Cidade:
          <input
            id="city-input"
            name="city"
            onChange={ ({ target: { value } }) => setCity(value) }
            type="text"
            value={ city }
          />
        </label>
        </fieldset>

        <fieldset>
        <legend>Módulo:</legend>

        <label htmlFor="fundamentals-module">
          <input
            checked={ module === 'Fundamentals' }
            id="fundamentals-module"
            name="module"
            onChange={ ({ target: { value } }) => setModule(value) }
            type="radio"
            value="Fundamentals"
          />
          Fundamentos
        </label>

        <label htmlFor="frontend-module">
          <input
            checked={ module === 'Front-End' }
            id="frontend-module"
            name="module"
            onChange={ ({ target: { value } }) => setModule(value) }
            type="radio"
            value="Front-End"
          />
          Front-End
        </label>

        <label htmlFor="backend-module">
          <input
            checked={ module === 'Back-End' }
            id="backend-module"
            name="module"
            onChange={ ({ target: { value } }) => setModule(value) }
            type="radio"
            value="Back-End"
          />
          Back-End
        </label>

        <label htmlFor="computer-science-module">
          <input
            checked={ module === 'Computer Science' }
            id="computer-science-module"
            name="module"
            onChange={ ({ target: { value } }) => setModule(value) }
            type="radio"
            value="Computer Science"
          />
          Ciência da Computação
        </label>
        </fieldset>

        <button
          onClick={ () => console.log('Enviou!') }
          type="button"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default App;

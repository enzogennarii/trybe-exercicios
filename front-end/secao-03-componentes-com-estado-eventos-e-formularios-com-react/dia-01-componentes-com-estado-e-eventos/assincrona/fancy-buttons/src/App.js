import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    furia: 0,
    imperial: 0,
    pain: 0,
    counter: 0,
    totalClicks: 0,
  };

  handleAttTotalCounter = () => {
    this.setState(({
      furia,
      imperial,
      pain,
      counter,
    }) => {
      const summation = furia + imperial + pain + counter;
      return { totalClicks: summation }
    })
  }

  handleColorInverter = (({target}, clicks, className) => {
    if (clicks % 2 === 0) {
      target.className += '-inverted'
    } else {
      target.className = className;
    }
  })

  handleClick1 = (e) => {
    this.setState(({ furia }) => ({ furia: furia + 1 }))
    this.handleAttTotalCounter()
    const { furia } = this.state;
    this.handleColorInverter(e, furia, 'furia');
    console.log('Top 1 BR')
  };

  handleClick2 = (e) => {
    this.setState(({ imperial }) => ({ imperial: imperial + 1 }));
    this.handleAttTotalCounter();
    const { imperial } = this.state;
    this.handleColorInverter(e, imperial, 'imperial');
    console.log('Fora do Major, F!');
  };

  handleClick3 = (e) => {
    this.setState(({ pain }) => ({ pain: pain + 1 }));
    this.handleAttTotalCounter();
    const { pain } = this.state;
    this.handleColorInverter(e, pain, 'pain');
    console.log('GO PAIN!');
  };

  handleCounter = () => {
    this.setState((prev) => ({ counter: prev.counter += 1 }));
    this.handleAttTotalCounter()
  };

  render() {
    return (
      <main>
        <label>
          {this.state.furia}
          <button className="furia" onClick={ this.handleClick1 }>Furia</button>
        </label>

        <label>
          {this.state.imperial}
          <button className="imperial" onClick={ this.handleClick2 }>Imperial</button>
        </label>

        <label>
          {this.state.pain}
          <button className="pain" onClick={ this.handleClick3 }>Pain</button>
        </label>
        
        <button onClick={ this.handleCounter }>Num de Clicks {this.state.counter}</button>

        <p>Número de cliques totais: { this.state.totalClicks }</p>
      </main>
    )
  }
}

export default App;

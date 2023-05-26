import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ramdomUser: {},
    }

    this.fetchRamdomUser = this.fetchRamdomUser.bind(this);
  }

  async fetchRamdomUser() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }

  componentDidMount() {
    const user = this.fetchRamdomUser()
    this.setState({
      ramdomUser: user,
    })
  }

  render() {
    return (
      <section className="App">
        <p>{}</p>
      </section>
    );
  }
}

export default App;

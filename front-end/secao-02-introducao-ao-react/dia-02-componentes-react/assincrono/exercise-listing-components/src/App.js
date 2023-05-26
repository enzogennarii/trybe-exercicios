// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import users from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {users.map((user) => <UserProfile user={ user } />)}
      </div>
    );
  }
}

export default App;

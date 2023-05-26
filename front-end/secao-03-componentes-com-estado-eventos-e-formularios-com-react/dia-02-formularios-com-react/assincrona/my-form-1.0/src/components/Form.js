import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      notifications: 'never',
      description: '',
      remember: false,
      image: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState(() => ({
      [name]: value,
    }))
  }

  render() {
    return (
      <form>
        <fieldset>
          <Input name="email" type="email" fHandler={ this.handleChange } />
          {this.state.email.length > 20 ? <p>20</p> : <p></p>}
          <Input name="password" type="password" fHandler={ this.handleChange } />
        </fieldset>

        <label> Receber notificações
          <select name="notifications" onChange={ this.handleChange }>
            <option value="never">Nunca</option>
            <option value="yes">Sim</option>
          </select>
        </label>

        <fieldset>
          <label htmlFor="remember">Lembrar de mim</label>
          <input
          name="remember"
          type="checkbox"
          id="remember"
          onChange={ this.handleChange }
          />
        </fieldset>

        <textarea name="description" onChange={ this.handleChange } />

        <input name="image" type="file" onChange={ this.handleChange } />
      </form>
    )
  }
}

export default Form
import React, { Component } from 'react';

class FormToDo extends Component {
  constructor() {
    super();

    this.state = {
      toDo: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { saveTask } = this.props;
    const { toDo } = this.state;

    return (
      <form onSubmit={(e) => saveTask(e, toDo)} >
        <input
          type="text"
          name="toDo"
          placeholder="Digite sua tarefa aqui"
          onChange={this.handleChange}
          value={ toDo }
        />
        <button
          type="submit"
        >
          Salvar
        </button>
      </form>
    )
  }
}

export default FormToDo

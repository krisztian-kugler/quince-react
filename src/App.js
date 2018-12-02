import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Modal from './Modal/Modal';

class App extends Component {

  componentDidMount() {
    axios.get("persons.json")
      .then(response => {
        this.setState({ persons: response.data })
      });
  }

  state = {
    timeout: null,
    updated: null,
    displayModal: false,
    dataDump: "",
    modalInputs: {
      name: "",
      job: "",
      age: "",
      nick: "",
      employee: false
    },
    persons: []
  }

  toggleEmployeeHandler = (i, person) => {
    const persons = [...this.state.persons];
    persons[i].employee = !persons[i].employee;
    this.setState({ persons: persons });
    this.dataDumpHandler(person);
  }

  deletePersonHandler = (i, person) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({ persons: persons });
    this.dataDumpHandler(person);
  }

  toggleModalHandler = () => {
    const value = this.state.displayModal;
    this.setState({ displayModal: !value });
  }

  inputChangeHandler = (event) => {
    const updatedModalInputs = { ...this.state.modalInputs };
    updatedModalInputs[event.target.name] = event.target.value;
    this.setState({ modalInputs: updatedModalInputs });
  }

  toggleModalEmployeeHandler = () => {
    const updatedModalInputs = { ...this.state.modalInputs };
    updatedModalInputs.employee = !updatedModalInputs.employee;
    this.setState({ modalInputs: updatedModalInputs });
  }

  submitPerson = () => {
    const newPerson = { ...this.state.modalInputs };
    const updatedPersons = [...this.state.persons];
    updatedPersons.push(newPerson);
    this.toggleModalHandler();
    this.dataDumpHandler(newPerson);
    this.setState({
      modalInputs: { name: "", job: "", age: "", nick: "", employee: false },
      persons: updatedPersons
    })
  }

  dataDumpHandler = (person) => {
    const value = `{name: ${person.name}, job: ${person.job}, age: ${person.age}, nick: ${person.nick}, employee: ${person.employee}}`;
    this.setState({ dataDump: value });
    this.updated();
  }

  updated = () => {
    this.setState({ updated: "updated" });
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
      this.setState({ timeout: null });
    }
    this.setState({
      timeout: setTimeout(() => {
        this.setState({ updated: null });
      }, 100)
    })
  }

  render() {
    let modal = null;
    if (this.state.displayModal) {
      modal = (
        <Modal
          employee={this.state.modalInputs.employee}
          check={this.toggleModalEmployeeHandler}
          changed={(event) => this.inputChangeHandler(event)}
          close={this.toggleModalHandler}
          submit={this.submitPerson} />
      )
    }

    return (
      <div>
        <header>
          <img src={logo} className="logo" alt="logo" />
          <span>React</span>
        </header>

        <main>
          <div className="wrapper">
            <button className="btn-add" onClick={this.toggleModalHandler}>Add</button>
            <div className="list-header">
              <div className="cell name-job">Name / Job</div>
              <div className="cell age">Age</div>
              <div className="cell nickname">Nickname</div>
              <div className="cell employee">Employee</div>
              <div className="cell delete"></div>
            </div>
            <div className="persons-list">
              {this.state.persons.map((person, i) => {
                return <Person
                  id={i}
                  name={person.name}
                  job={person.job}
                  age={person.age}
                  nick={person.nick}
                  employee={person.employee}
                  toggleEmployee={this.toggleEmployeeHandler.bind(this, i, person)}
                  delete={this.deletePersonHandler.bind(this, i, person)}
                  key={Math.random().toFixed(4) + person.name} />
              })}
            </div>
            <p className="data-dump">Data dump:</p>
            <textarea className={this.state.updated} value={this.state.dataDump} onChange={() => { return }}></textarea>
          </div>
          {modal}
        </main>
      </div>
    );
  }
}

export default App;

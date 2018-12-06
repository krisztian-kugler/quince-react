import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Modal from './Modal/Modal';

class App extends Component {

  componentDidMount() {
    axios.get("persons.json")
      .then(res => {
        this.setState({persons: res.data}, () => {
          this.sortByName();
          this.setState({initialized: true});
        });
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
    persons: [],
    order: "ascending",
    initialized: false,
    submitDisabled: true,
    arrow: String.fromCharCode(8593)
  }

  toggleEmployeeHandler = (i) => {
    const persons = [...this.state.persons];
    persons[i].employee = !persons[i].employee;
    this.setState({persons: persons}, () => {
      this.dataDumpHandler();
    });
  }

  deletePersonHandler = (i) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({persons: persons}, () => {
      this.dataDumpHandler();
    });
  }

  toggleModalHandler = () => {
    const value = this.state.displayModal;
    this.setState({
      displayModal: !value,
      submitDisabled: true
    });
  }

  inputChangeHandler = (event) => {
    const modalInputs = {...this.state.modalInputs};
    modalInputs[event.target.name] = event.target.value;
    this.setState({modalInputs: modalInputs}, () => {
      if (this.state.modalInputs.name.length >= 3) {
        this.setState({submitDisabled: false});
      } else {
        this.setState({submitDisabled: true});
      }
    });
  }

  toggleModalEmployeeHandler = () => {
    const modalInputs = {...this.state.modalInputs};
    modalInputs.employee = !modalInputs.employee;
    this.setState({modalInputs: modalInputs});
  }

  submitPerson = () => {
    if (this.state.submitDisabled) {
      return;
    }
    const newPerson = {...this.state.modalInputs};
    const persons = [...this.state.persons];
    persons.push(newPerson);
    this.setState({
      modalInputs: {name: "", job: "", age: "", nick: "", employee: false},
      persons: persons,
      submitDisabled: true
    }, () => {
      this.toggleModalHandler();
      this.sortByName();
    });
  }

  dataDumpHandler = () => {
    let data = "";
    this.state.persons.forEach((person, i) => {
      data += `{\n  "name": "${person.name}",\n  "job": "${person.job}",\n  "age": "${person.age}",\n  "nick": "${person.nick}",\n  "employee": ${person.employee}\n}${i === this.state.persons.length - 1 ? "" : ","}\n`
    })
    this.setState({dataDump: data});
    this.updated();
  }

  updated = () => {
    this.setState({updated: "updated"});
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
      this.setState({timeout: null});
    }
    this.setState({
      timeout: setTimeout(() => {
        this.setState({updated: null});
      }, 100)
    })
  }

  sort = () => {
    if (this.state.order === "ascending") {
      this.setState({order: "descending"}, () => {
        this.sortByName();
        this.setState({arrow: String.fromCharCode(8595)});
      });
    } else {
      this.setState({order: "ascending"}, () => {
        this.sortByName();
        this.setState({arrow: String.fromCharCode(8593)});
      });
    }
  }

  // Sort persons by name
  sortByName = () => {
    let persons;
    if (this.state.order === "ascending") {
      persons = this.bubbleSort(this.state.persons, "name");
    } else if (this.state.order === "descending") {
      persons = this.bubbleSort(this.state.persons, "name").reverse();
    }
    this.setState({persons: persons});
    if (this.state.initialized) {
      this.dataDumpHandler();
    }
  }

  // Alphabetical bubble sort (not quite suitable for large arrays)
  bubbleSort = (arr, prop) => {
    if (arr.length < 2) {
      throw new Error("Array is too short for sorting!");
    }
    let counter = arr.length - 2;
    while (counter >= 0) {
      for (let i = 0; i <= counter; i++) {
        if (this.isSwapNecessary(arr[i][prop], arr[i + 1][prop])) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
      counter--;
    }
    return arr;
  }

  // Helper function for bubble sort to determine whether a swap is necessary (checks alphabetical order)
  isSwapNecessary = (a, b) => {
    const str1 = a.toLowerCase();
    const str2 = b.toLowerCase();
    const length = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
      if (str1[i] < str2[i]) {
        return false;
      } else if (str1[i] === str2[i]) {
        if (i === length - 1 && str1.length > str2.length) {
          return true;
        }
        continue;
      } else {
        return true;
      }
    }
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
          submit={this.submitPerson}
          submitDisabled={this.state.submitDisabled} />
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
              <div className="cell name-job" onClick={this.sort}>Name / Job
                <div className="arrow">{this.state.arrow}</div>
              </div>
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

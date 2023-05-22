import { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Notification from './Notification';
import {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
} from './phoneServices';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPersons().then((data) => setPersons(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonObj = {
      name: newName,
      number: newNumber,
    };

    const foundPerson = persons.find((person) => person.name === newName);
    if (typeof foundPerson !== 'undefined') {
      if (
        window.confirm(
          `${foundPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updatePerson(foundPerson.id, newPersonObj)
          .then((data) =>
            setPersons(
              persons.map((person) =>
                person.id !== foundPerson.id ? person : data
              )
            )
          )
          .catch((error) => {
            setError(true);
            setMessage(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => setMessage(null), 5000);
          });
        setMessage(`${newName}'s number changed`);
        setTimeout(() => setMessage(null), 5000);
      }
    } else {
      addPerson(newPersonObj).then((data) => setPersons(persons.concat(data)));
      setMessage(`Added ${newName}`);
      setTimeout(() => setMessage(null), 5000);
    }
    setNewName('');
    setNewNumber('');
  };

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterInput = (event) => {
    setFilter(event.target.value);
    const filteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(filter.toLowerCase());
    });
    setPersons(filteredPersons);
  };

  const handleDelete = (id, person) => {
    if (window.confirm(`Delete ${person} ?`)) {
      deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={error} />
      <Filter filter={filter} handleFilterInput={handleFilterInput} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const contacts = this.state.contacts;
    if (contacts.map(contact => contact.name.includes(name))) {
      alert(name + ' is already in contacts');
      return;
    }
    const id = nanoid();
    contacts.push({ id, name, number });
    this.setState(state => ({
      contacts: state.contacts,
    }));
    form.reset();
  };
  filter = event => {
    event.preventDefault();
    const filter = event.target.value;
    this.setState({
      filter: filter,
    });
  };
  deleteContact = event => {
    event.preventDefault();
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    const id = event.target.parentElement.id;
    const contacts = this.state.contacts;
    contacts.splice(
      contacts.map(obj => (obj.id === id ? contacts.indexOf(obj) : null)),
      1
    );
    this.setState({
      contacts: contacts,
    });
  };
  render() {
    const filtered = this.state.contacts.filter(obj =>
      obj.name.includes(this.state.filter)
    );
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList contacts={filtered} remove={this.deleteContact} />
      </>
    );
  }
}

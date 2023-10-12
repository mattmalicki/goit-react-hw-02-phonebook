import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    const { remove } = this.props;
    return (
      <ul onClick={remove}>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

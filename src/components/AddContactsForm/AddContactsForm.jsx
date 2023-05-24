import { nanoid } from 'nanoid'
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Section, Form, Button } from './AddContactsForm.styled';

const inputNameId = nanoid();
const inputNumberId = nanoid();

class AddContactsForm extends Component{
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({target}) => {
    const value = target.value;
    this.setState({
      [target.name]: value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    })
    this.setState({
      name: '',
      number: '',
    }) 
  }

  render() {
  return <Section>
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleFormSubmit}>
            <label htmlFor={inputNameId}>Name</label> 
            <input
              id={inputNameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            <label htmlFor={inputNumberId}>Number</label> 
            <input
              id={inputNumberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
              value={this.state.number}
            />
            <Button type="submit">Add contacts</Button>
          </Form> 
        </Section>
  }
};

AddContactsForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default AddContactsForm;

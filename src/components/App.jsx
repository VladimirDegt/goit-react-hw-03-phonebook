import { Component } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import AddContactsForm from "./AddContactsForm";
import Contacts from "./Contacts";
import { StyledContainer } from './App.styled';
import { getItemLocalStorage, setItemLocalStorage } from "localStorage";

export class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    if(!getItemLocalStorage()){
      setItemLocalStorage(this.state.contacts)
    } else {
      this.setState({
        contacts: JSON.parse(getItemLocalStorage())
      })
    }
  };

  componentDidUpdate(_, prevState) {
    if(prevState.contacts.length !== this.state.contacts.length){
      setItemLocalStorage(this.state.contacts)
    }
  }

  createContact(data){
    const newContact = {
      ...data,
      id: nanoid(),
    }
    this.addContact(newContact)
  };

  addContact = (newContact) => {
    if(this.state.contacts.some((item)=>{
      return item.name.toLowerCase() === newContact.name.toLowerCase()
    })) {
      Notify.failure('Такий контакт вже записано!')
      return
    }
    Notify.success('Контакт записано!')
    this.setState((prevState)=>{
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
};

  deleteContact = (contactId) => {
    this.setState((prevState)=>({
      contacts: prevState.contacts.filter( (item) => item.id !== contactId),
    }))
    Notify.info('Контакт видалено!')
  };

  render() {
    return (
      <StyledContainer>
        <AddContactsForm 
          createContact={(data)=>this.createContact(data)}
        />
        <Contacts 
          contacts={this.state.contacts}
          onDeleteContact = {this.deleteContact}
        />
      </StyledContainer>
    );
  };
};

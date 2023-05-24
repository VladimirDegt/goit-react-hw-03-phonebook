import { Component } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import AddContactsForm from "./AddContactsForm";
import Contacts from "./Contacts";
import { Container } from './App.styled';
import { getItemLocalStorage, setItemLocalStorage } from "localStorage";

export class App extends Component {
  state = {
    contacts: [],
  };

  // componentDidMount() {
  //   if(getItemLocalStorage()){
  //     const contactsList = JSON.parse(getItemLocalStorage());
  //     this.setState({
  //       contacts: [...JSON.parse(getItemLocalStorage())]
  //     })
  //   }
  // }

  createContact(data){
    const newContact = {
      ...data,
      id: nanoid(),
    }
    this.addContact(newContact)
  };

  addContact = (newContact) => {
    if(getItemLocalStorage()) {
      const contactsList = JSON.parse(getItemLocalStorage());
      if(contactsList.some((item)=>{
        return item.name.toLowerCase() === newContact.name.toLowerCase()
      })) {
        Notify.failure('Такий контакт вже існує!')
        return
      }
      contactsList.push(newContact)
      setItemLocalStorage(contactsList);
      this.setState({
        contacts: [...JSON.parse(getItemLocalStorage())]
      })
      Notify.success('Контакт записано!')
    } else {
      const contactsList = [];
      contactsList.push(newContact)
      setItemLocalStorage(contactsList);
    }
  };

  deleteContact = (contactId) => {
    const contactsList = JSON.parse(getItemLocalStorage());
    const filterContactsList = contactsList.filter( (item) => item.id !== contactId)
    setItemLocalStorage(filterContactsList);
    this.setState({
      contacts: [...JSON.parse(getItemLocalStorage())]
    })
    Notify.info('Контакт видалено!')
  };

  render() {
    return <Container>
    <AddContactsForm createContact={(data)=>this.createContact(data)}/>
    <Contacts 
      contacts={this.state.contacts}
      onDeleteContact = {this.deleteContact}
      />
    </Container>;
  };
};

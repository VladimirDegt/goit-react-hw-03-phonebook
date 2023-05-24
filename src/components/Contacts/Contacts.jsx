import { Component } from "react";
import PropTypes from 'prop-types';
import { Section } from './Contacts.styled';
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

class Contacts extends Component {

  state = {
    find: '',
  }

  handleInputChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  findContact = () => {
    return this.props.contacts.filter((item) => 
      item.name.toLowerCase().includes(this.state.find.toLowerCase())
    )
  }

  render() {
    return  <Section>
              <h2>Contacts</h2>
              <Filter 
                handleInputChange = {this.handleInputChange}
                value={this.state.find}
              />
              <ContactList
                findValue = {this.state.find}
                findContact = {this.findContact}
                onDeleteContact = {this.props.onDeleteContact}
              />
            </Section>
  }  
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;

import PropTypes from 'prop-types';
import { List, ItemList } from 'components/Contacts/Contacts.styled';

function ContactList({ findValue, findContact, onDeleteContact}){
  return (
    <List> 
      {findValue && findContact().map((item)=>{
      return (
        <ItemList key={item.id}>
          <span>{item.name}: {item.number}</span>
          <button 
            type="button"
            onClick={()=>onDeleteContact(item.id)}
            >delete
          </button>
        </ItemList>
      ) 
      })}
    </List>
  )
};

ContactList.propTypes = {
  findValue: PropTypes.string.isRequired,
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
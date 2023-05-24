import styled from '@emotion/styled'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const ContactsList = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 10px;
margin: 0 auto;
padding: 0;
`
export const ItemList = styled.li`
  list-style-type: none; 
  font-size: 20px;

  span {
    margin-right: 10px;
  }

  button {
    background-color: grey;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
    :hover {
      background-color: blue;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
`
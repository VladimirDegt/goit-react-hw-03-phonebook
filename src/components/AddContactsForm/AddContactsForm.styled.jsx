import styled from '@emotion/styled'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const Button = styled.button`
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
`
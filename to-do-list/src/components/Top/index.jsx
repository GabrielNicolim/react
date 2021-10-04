import Header from '../Header/index.jsx';
import Title from '../Title/index.jsx';
import Button from '../Button/index.jsx';
import Form from '../Form/index.jsx';
import React, { useState } from 'react';

const Top = ({ addItem }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      <Header>
          <Title />

          {!formIsOpen && <Button content='Add' onClick={() => setFormIsOpen(true)} backgroundColor='green' fontColor='white'/>}
          {formIsOpen && <Button content='X' onClick={() => setFormIsOpen(false)} backgroundColor='red' fontColor='white'/>}
      </Header>

      {
        formIsOpen 
        
        && 

        <Form addItem={ addItem }></Form>
      }
    </>
  );
}

export default Top;
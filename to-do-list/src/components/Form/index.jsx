import { useState } from 'react';
import './style.css';

const Form = ({ addItem }) => {
  const [formValue, setFormValue] = useState({
    title: '',
    date: '',
    time: ''
  }); 

  function handleChange(event) {
    setFormValue(
      {
        ...formValue,
        [event.target.id]: event.target.value 
      }
    )
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(formValue.title.trim() !== '' &&
      formValue.date.trim() !== '' &&
      formValue.time.trim() !== ''
    ) {
      addItem(formValue);
      setFormValue({
        title: '',
        date: '',
        time: ''
      })
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>New To Do</h2>

      <label htmlFor='title'>Title</label>
      <input type='text' id="title" value={formValue.title} onChange={handleChange} /> 

      <label htmlFor='date'>Date</label>
      <input type='date' id="date" value={formValue.date} onChange={handleChange} />

      <label htmlFor='time'>Time</label>
      <input type='time' id="time" value={formValue.time} onChange={handleChange} />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
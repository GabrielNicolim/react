import Top from './components/Top/index.jsx';
import List from './components/List/index.jsx';
import React, { useState } from 'react';

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(item) {
    let newList = listItems.concat({
      id: listItems.length + 1,
      title: item.title,
      date: item.date,
      time: item.time
    })

    setListItems(newList);
  }

  function removeItem(id) {
    let newList = listItems.filter((item) => item.id !== id)

    setListItems(newList);
  }

  return (
    <div id='app'>
      <Top addItem={ addItem }/>

      <List listItems={ listItems } removeItem={ removeItem }/>
    </div>
  );
}

export default App;

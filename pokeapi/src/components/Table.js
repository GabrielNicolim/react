import React, { useState, useEffect } from 'react';
import Item from './Item';
import Button from './Button';

// Parte pensante -> Use: https://pokeapi.co

const Table = () => {

  const [list, setList] = useState([]); 
  const [buttons, setButtons] = useState({previous: null, next: null});

  // Estado inicial 
  useEffect(() => {
    request('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  // Requisição à API
  function request (url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const json = JSON.parse(xhr.responseText);
          setButtons({ previous: json.previous , next: json.next});
          setList(json.results);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };

    xhr.send(null);
  }

  function getPrevious(url) {
    request(url)
  }

  function getNext(url) {
    request(url)
  }

  return (
    <>
      <div className="flex justify-center mt-10">
        {!!buttons.previous && <Button func={() => getPrevious(buttons.previous)} content="Previous" />}
        {!!buttons.next && <Button func={() => getNext(buttons.next)} content="Next" /> }
      </div>  

      <div>
        
        {
            (!list) ? <div>Carregando ... </div> : (
              list.map((item) => {
                return <Item key={item.name} name={item.name} url={item.url}/>
              })
            )
          
        }
        
      </div>
    </>
  );
}

export default Table;
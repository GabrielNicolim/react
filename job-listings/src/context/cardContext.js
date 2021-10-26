import React, { useState, useEffect } from "react";

export const CardContext = React.createContext([]);

const defaultValue = [
  {
    id: 0, 
    company: 'Photosnap', 
    name: 'Senior Frontend Developer',
    time: '1d ago', 
    type: 'Full Time',
    locale: 'USA only',

    tags: [
      'Frontend',
      'Senior',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    id: 1,
    company: 'Photosnap', 
    name: 'Pleno Backend Developer',
    time: '1d ago', 
    type: 'Full Time',
    locale: 'USA only',

    tags: [
      'Backend',
      'Pleno',
      'PHP',
      'Laravel',
      'SQL',
    ],
  },
  {
    id: 2,
    company: 'Photosnap', 
    name: 'Junior Frontend Developer',
    time: '1d ago', 
    type: 'Full Time',
    locale: 'USA only',

    tags: [
      'Frontend',
      'Junior',
      'HTML',
      'CSS'
    ],
  },
];

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setCards(defaultValue);
  }, [])

  useEffect(() => {
    cardSearch(searchValue); 
  }, [searchValue]);

  function cardSearch(value) {
    if(value !== '') {
      let newArray = [];

      newArray = defaultValue.filter((v) => {
        let isValid = false; 
        v.tags.forEach((t) => {
          if(t.toLowerCase().match(value.toLowerCase())) {
            isValid = true
          } 
        })

        return isValid;
      });

      setCards(newArray); 
    } else {
      setCards(defaultValue);
    }
  }

  function search(value) {
    setSearchValue(value)
  }

  return (
    <CardContext.Provider value={{ cards, searchValue, search }}>
      { children }
    </CardContext.Provider>
  );
}

export const useCard = () => React.useContext(CardContext);

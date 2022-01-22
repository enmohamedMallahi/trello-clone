import React, { useReducer } from 'react';
import { ListsReducer } from './reducers';

export const ListsContext = React.createContext();

export const ListsProvider = ({ children }) => {
  const dummyData = [
    {
      id: 1,
      text: 'Item 1',
      list: 'one',
    },

  ];

  const [items, dispatch] = useReducer(ListsReducer, [...dummyData]);

  return (
    <ListsContext.Provider value={{ items, dispatch }}>
      {children}
    </ListsContext.Provider>
  );
};

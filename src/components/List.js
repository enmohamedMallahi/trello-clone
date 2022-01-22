import React, { useState, useContext } from 'react';
import { ListsContext } from '../contexts/ListsContext';
import Form from './Form';

const List = ({ list }) => {
  const { items, dispatch } = useContext(ListsContext);
  const [text, setText] = useState('');

  React.useEffect(() => {
    console.log(items);
  }, []);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(items);
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
    };
    // setItems((prevItems) => prevItems.concat(newItem));
    setText('');
  };
  return (
    <div>
      <ul className="list-group draggable">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        text={text}
      />
    </div>
  );
};

export default List;

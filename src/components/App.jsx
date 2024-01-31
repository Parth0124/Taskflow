import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => [
      ...prevItems,
      { text: inputText, completed: false },
    ]);
    setInputText("");
  }

  function toggleCompletion(index) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].completed = !newItems[index].completed;
      return newItems;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              onClick={() => toggleCompletion(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [priority, setPriority] = useState("medium");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {day: 'numeric',month: 'long', year: 'numeric', };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => [
      ...prevItems,
      { text: inputText, completed: false, priority: priority, highlighted: true },
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

  function clearCompleted() {
    setItems((prevItems) => prevItems.filter((item) => !item.completed));
  }

  const remainingCount = items.filter((item) => !item.completed).length;

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
        <div className="date">{currentDate}</div>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} className="input-box" />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-dropdown"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`${item.highlighted ? 'highlighted' : ''} ${item.priority}-priority`}
              onClick={() => toggleCompletion(index)}
            >
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
              <br />
            </li>
          ))}
        </ul>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
      <p>{remainingCount} items remaining</p>
    </div>
  );
}

export default App;

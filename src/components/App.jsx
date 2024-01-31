import React, { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import Todolist from './Todolist';
import Footer from './Footer';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [priority, setPriority] = useState("high");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {day:'numeric', month: 'long', year: 'numeric', };
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
      <Header currentDate={currentDate}/>
      <Form setPriority={setPriority} handleChange={handleChange} addItem={addItem}/>
      <Todolist items={items} toggleCompletion={toggleCompletion}/>
      <Footer clearCompleted={clearCompleted} remainingCount={remainingCount}/>
    </div>
  );
}

export default App;

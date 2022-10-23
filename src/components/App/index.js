import React, {useState} from 'react';
import './index.css'

function App() {

  const [text, setText] = useState("World");
  const [inputValue, setInputValue] = useState("");

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setText("Hej!");
  // } 

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(inputValue);
    setInputValue("");
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Wpisz treść
          <input 
            value={inputValue} 
            type="text" 
            onChange={handleInputChange}>
          </input>
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';



// 1. Stworz formularz, ktory posiada pole title i guzik do submitowania formularza. (aby dodac zadanie do listy)
// 2. Stworz listę, która będzie przetrzymywała zadanie do wyswietlenia (tylko jedno)
// 3*. przy uzyciu funkcji map, spraw zeby mozna bylo dodawac wiele zadan
// 4**. dodaj hook useEffect i dane odczytuj i zapisuj do localStorage :)
// 5***. dodaj json-server i zrob obsluge API
function TodoList() {
 
    const [todoInputValue, setTodoInputValue] = useState("");
    // const [todoText, setTodoText] = useState('')
    const [todos, setTodos] = useState([]);
    const [currentTime, setCurrentTime] = useState(null);
  

    useEffect(() => {
        localStorage.setItem("todos", "")
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    
    setInterval(() => {
        setTimeout(() => {
            const date = new Date();
            setCurrentTime(date.toString())    
        }, 1000)
    }, []);

  const handleTodoInputChange = event => {
    event.preventDefault();
    setTodoInputValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    // setTodoText(todoInputValue)

    // 1. Zamienic Math.random() na uuid.
    const newTodo = {
      id: uuidv4(),
      title: todoInputValue
    }

    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
    setTodoInputValue('')
  }

  const handleClickRemove = () => {
    setTodos([]);
  }

  const handleClickLi = (itemId) => {
    const filteredTodos = todos.filter((item) => item.id !== itemId)
    setTodos(filteredTodos);
    // console.log(itemId);
  }

  return (
    <div>
      {currentTime ? <p>{currentTime}</p> : null}
      <p>Todo List</p>
      <form onSubmit={handleSubmit}>
        <label>
          Task
          <input
            type="text"
            value={todoInputValue}
            onChange={handleTodoInputChange}
          />
        </label>
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {/* <li>{todoText}</li> */}

        {/* {
          title: 'Wynieść śmieci'
        } */}

        {/* <li>{TODOS[0].title}</li> */}

        {todos.map(todo => {
          return <li onClick={() => handleClickLi(todo.id)} key={todo.id}>{todo.title}</li>
        })}
      </ul>
      {/* 2. Zrobic obsluge usuwania zadan z listy */}
      <button onClick={handleClickRemove}>Remove Todos</button>
    </div>
  )
}

export default TodoList;
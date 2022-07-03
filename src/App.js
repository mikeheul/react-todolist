import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import styles from './components/style.module.css';
import TodoList from './components/TodoList';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
};

export default App;
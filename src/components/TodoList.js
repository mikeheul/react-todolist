import React from 'react';
import Todo from './Todo';
import styles from './style.module.css';

const TodoList = ({ todoList, setTodoList }) => {

    const l = todoList.length;

    return (
        <div className={styles.listitems}>
        {
            todoList.map((todoItem) => (
                <Todo 
                    todoList={todoList} 
                    setTodoList={setTodoList} 
                    todoItem={todoItem} 
                    key={todoItem.id} 
                    id={todoItem.id} 
                />
            ))
        }
        </div>
    );
};

export default TodoList;
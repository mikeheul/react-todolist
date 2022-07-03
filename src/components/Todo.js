import React, { useState } from 'react';
import styles from './style.module.css';

const Todo = ({ todoItem, todoList, setTodoList }) => {

    const [isActive, setIsActive] = useState(false);

    const handleDelete = () => {
        setTodoList(todoList.filter((item) => item.id !== todoItem.id))
    }

    return (
        <div className={styles.listitem}>
            <h4>{todoItem.name}</h4>
            <button onClick={handleDelete}>Done</button>
        </div>
    );
};

export default Todo;
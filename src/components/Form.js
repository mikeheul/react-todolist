import React from 'react';
import shortid from 'shortid';
import styles from './style.module.css';

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    
    const handleChange = (e) => {
        setTodo(e.target.value);
        // console.log(todo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate()}]);
        setTodo("");
        // console.log(todoList);
    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput} placeholder="Add an item..." value={todo} type="text" onChange={handleChange} required={true} /><br />
                <button className={styles.btn} type="submit">Add</button>
            </form>
        </div>
    );
};

export default Form;
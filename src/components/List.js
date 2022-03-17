import React from 'react'
import Button from 'react-bootstrap/Button';

export default function List(props) {
    const {todo, removeTodo, completeTodo} = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="buttonsContainer">
                <Button variant="danger" style={{marginRight: 5}} onClick={() => removeTodo(todo.id)}>Supprimer</Button>
                <Button variant="success" onClick={() => completeTodo(todo.id)}>Fait</Button>{' '}
            </div>
        </div>
    )
}


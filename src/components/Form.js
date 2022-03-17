import React, { useState } from "react";
import Button from 'react-bootstrap/Button';


export default function Form(props) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="input-group mb-3">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="form-control"
                placeholder="Titre de la tâche à ajouter !"
                required={true}
            />
            <Button type={"submit"} variant="outline-primary">Ajouter</Button>{' '}

        </form>
    );
}


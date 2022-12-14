import React from "react";
import {AiOutlinePlus} from "react-icons/ai";   

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <form>
            <div className="input__field">
                <input
                value={inputText}
                onChange={inputTextHandler} 
                type="text" className="todo-input" 

                />
                <button
                    onClick={submitTodoHandler} 
                    className="todo-button" type="submit"
                >
                    <AiOutlinePlus className="plus__icon" />
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
    
};

export default Form;
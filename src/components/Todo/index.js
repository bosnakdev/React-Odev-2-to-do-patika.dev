import { useState, useEffect } from 'react'
import Footer from './Footer'
import List from './List'
import Form from './Form'

function Todo() {
    const [todolist, setTodoList] = useState(JSON.parse(localStorage.getItem("todolist")) || []);

    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todolist));
    }, [todolist]);
    const todoRemove = (i) => {
        for (let index = 0; index < todolist.length; index++) {
            if (i === index) {
                console.log(todolist[index].todo);
                todolist.splice(index, 1);
                break;
            }
        }
        setTodoList([...todolist]);
    }

    const todoCheck = (status, i) => {
        for (let index = 0; index < todolist.length; index++) {
            if (i === index) {
                todolist[index].status = status ? 1 : 0;
                break;
            }
        }
        setTodoList([...todolist]);
    }

    const todoClearComplated = () => {
        setTodoList(todolist.filter((todo) => todo.status === 0));
    }
    const setAllcheck = () => {
        for (let index = 0; index < todolist.length; index++) {
            todolist[index].status = 1;
        }
        setTodoList([...todolist]);
    }
    
    const [filterTodo, setFilterTodo] = useState("all");
    return (
        <>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <Form addTodoList={setTodoList} bTodoList={todolist} />
                </header>

                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <label onClick={(e) => setAllcheck()} htmlFor="toggle-all">
                        Mark all as complete
                    </label>

                    <ul className="todo-list">
                        <List todoRemove={todoRemove} todoCheck={todoCheck} todoList={todolist} filterTodo={filterTodo} />
                    </ul>
                </section>

                <Footer Length={todolist.filter((item) => item.status === 1).length} todoClearComplated={todoClearComplated} filterTodo={filterTodo} setFilterTodo={setFilterTodo} />
            </section>
        </>
    )
}

export default Todo
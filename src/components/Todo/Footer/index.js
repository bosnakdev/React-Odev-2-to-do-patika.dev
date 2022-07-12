import React from 'react'

function Footer({ Length, todoClearComplated, filterTodo, setFilterTodo }) {
    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{Length} </strong>
                     items left
                </span>

                <ul className="filters">
                    <li>
                        <button onClick={(e) => setFilterTodo("all")} className={filterTodo==="all" ? "selected" : ""}>All</button>
                    </li>
                    <li>
                        <button onClick={(e) => setFilterTodo(0)} className={filterTodo===0 ? "selected" : ""}>Active</button>
                    </li>
                    <li>
                        <button onClick={(e) => setFilterTodo(1)} className={filterTodo===1 ? "selected" : ""}>Completed</button>
                    </li>
                </ul>

                <button onClick={(e) => todoClearComplated()} className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </>
    )
}

export default Footer
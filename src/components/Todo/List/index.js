import React from 'react'

function List({ todoList, todoRemove, todoCheck, filterTodo }) {
    const toggleCheck = (e, i) => {
        todoCheck(e.target.checked, i);
    }
   
    return (
        <>
           {
            todoList.map((todo, i) => 
                <li key={i} className={ todo.status === 0 ? "view" : "completed" } hidden={filterTodo!=="all" ? filterTodo===1 ? todo.status===0 ? true:false : todo.status===1 ? true:false : false}>
                    <div>
                        <input checked={todo.status === 0 ? false : true} onChange={(e) => toggleCheck(e, i)} className="toggle" type="checkbox" />
                        <label>{todo.todo}</label>
                        <button onClick={(e) => todoRemove(i)} className="destroy"></button>
                    </div>
                </li>
            )
           }
        </>
    )
}

export default List
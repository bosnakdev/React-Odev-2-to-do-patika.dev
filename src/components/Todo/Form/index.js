import {useState} from 'react'

function Form({addTodoList, bTodoList}) {
    const [todoAdd, setTodoAdd] = useState({todo: "", status: 0});

    const onChange = (e) => {
        setTodoAdd({...todoAdd, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(todoAdd.todo === '') return;
        console.log(todoAdd);
        addTodoList([todoAdd, ...bTodoList]);
        setTodoAdd({todo:"", status: 0});
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input className="new-todo" name='todo' onChange={onChange} placeholder="What needs to be done?" value={todoAdd.todo} autoFocus />
            </form>
        </>
    )
}

export default Form
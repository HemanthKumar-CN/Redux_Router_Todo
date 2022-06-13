import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, todoAdd } from '../Store/action';
import axios from 'axios'



const TodoApp = () => {
    const dispatch=useDispatch();
    const ref=useRef();

    // const todos=useSelector((state)=>state.todo.todos)  EARLIER:

    const {loading,error,data:todos}=useSelector((state)=>state.todo.getTodos)

    const {loading:addbuttonLoading}=useSelector((state)=>state.todo.addTodo)

    const addNew=()=> {
        let value=ref.current.value;
        dispatch(todoAdd({
            value:value,
            isCompleted:true,
        }))
    }

    useEffect(() => {
    //   getTodos(dispatch)
    dispatch(getTodos());
    }, [])
    
    

  return loading ? <div>...loading</div> : error ? <div>Something Went Wrong</div> : (
    <div>
        <h1>TodoApp</h1>
        <input ref={ref} type="text"  placeholder='Add todo' />
        <button onClick={addNew} disabled={addbuttonLoading}>Add</button>
        <br />
        <br />
        <br />
        {
            todos.map(item=> (
                <div key={item.id}>{item.value}
                <input type="checkbox" onChange={(e)=> {}}  checked={item.isCompleted} name=""  id="" />
                </div>
            ))
        }
    </div>
  )
}

export default TodoApp
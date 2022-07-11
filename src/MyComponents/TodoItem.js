import React from 'react'

export const TodoItem = (props) => {
    return (
        <>
        <div className={`container my-1 text-${props.mode==="light" ? 'dark' : 'light'}`}>
           <h4 className='my-1'>{props.todo.title}</h4>
           <p>{props.todo.desc}</p>
           <button className="btn btn-sm btn-danger my-1" onClick={()=>{props.onDelete(props.todo)}}>Delete</button> 
        </div>
        <hr className='my-1 btn-outline-secondary'/> 
        </>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'
import todo_icon from "../assets/todo_icon.png"
const Todo = () => {

const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

const inputRef = useRef();

const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
       return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";
}

const deleteTodo = (id) => {
  setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};


const toggle = (id)=> {
  setTodoList((prevTodo)=>{
     return prevTodo.map((todo)=>{
       if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
       };
       return todo;
     });
  });
};

useEffect (()=>{
 localStorage.setItem("todos", JSON.stringify(todoList));
},[todoList]);


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='box-border h-30 w-35 p-4 border-4 rounded-xl bg-white'>
        
  {/* --------title---------- */}

  <div className='flex items-center mt-7 gap-2'>
       <img className='w-8' src={todo_icon} alt="" />
       <h1 className='text-3xl font-semibold '>To-Do List</h1>
  </div>

    {/* --------input box---------- */}

    <div className='flex items-center my-7 bg-gray-200 rounded-full mb-6'>
    <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
    <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-12 text-white text-lg font-medium cursor-pointer'>ADD +</button></div>

     {/* --------todo list---------- */}

     <div className='mt-7'>
      {todoList.map((item, index)=> {
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
      })}
     </div>
    </div>
    </div>
  );
};

export default Todo;

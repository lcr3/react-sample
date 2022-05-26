import React, { useState } from 'react'
import Top from '@/component/Top'
import TodoInput from '@/component/Todoinput'
import TodoList from '@/component/ToDoList'
import './App.css'
import { useTodo } from '@/hooks/useTodo'

const App: React.FC = () => {
  const { todoState: state, addTodo: add, resetTodo: reset } = useTodo()

  return (
    <div className="App">
      <h1>TODO App</h1>
      <button onClick={reset}>リセット</button>
      <TodoInput onClick={add} />
      <TodoList todos={state.todos} />
    </div>
  )
}

export default App

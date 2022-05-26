import React, { useState } from 'react'
import Top from '@/component/Top'
import TodoInput from '@/component/Todoinput'
import TodoList from '@/component/ToDoList'
import './App.css'
import { useTodo } from '@/hooks/useTodo'

const App: React.FC = () => {
  const { todoState: state, addTodo: add, resetTodo: reset } = useTodo()

  return <Top />
}

export default App

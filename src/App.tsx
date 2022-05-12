import React, { useState } from 'react'
import TodoInput from './component/Todoinput'
import TodoList from './component/ToDoList'
import './App.css'

type TodoState = {
  todos: {
    title: string
    id: number
  }[]
  uniqueId: number
}

const App: React.FC = () => {
  const defaultTodos: TodoState = {
    todos: [{ title: 'デフォルトTODO', id: 0 }],
    uniqueId: 1,
  }
  const [todoState, setTodoState] = useState<TodoState>(defaultTodos)

  function addTodo(title: string) {
    const { todos, uniqueId }: TodoState = todoState

    todos.push({ title, id: uniqueId })

    setTodoState({ todos: todos, uniqueId: uniqueId + 1 })
  }

  return (
    <div className="App">
      <h1>TODO App</h1>
      <TodoInput onClick={addTodo} />
      {/* <TodoList todos={this.state.todos} /> */}
    </div>
  )
}

export default App

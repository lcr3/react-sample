import React, { useState } from 'react'

export type Todo = {
  id: number
  title: string
}
export type TodoState = {
  todos: Todo[]
  uniqueId: number
}
type UseResponse = {
  todoState: TodoState
  addTodo: (title: string) => void
  resetTodo: () => void
  deleteTodo: (index: number) => void
}
export const useTodo: () => UseResponse = () => {
  const defaultTodos: TodoState = {
    todos: [],
    uniqueId: 1,
  }

  const [todoState, setTodoState] = useState<TodoState>(defaultTodos)

  const addTodo = (title: string) => {
    const { todos, uniqueId }: TodoState = todoState

    todos.push({ title, id: uniqueId })

    setTodoState({ todos: todos, uniqueId: uniqueId + 1 })
  }

  const resetTodo = () => {
    setTodoState({ todos: [], uniqueId: 1 })
  }

  const deleteTodo = (index: number) => {
    const todos = todoState.todos
    todos.splice(index, 1)
    setTodoState({ todos: todos, uniqueId: 1 })
  }

  return {
    todoState: todoState,
    addTodo: addTodo,
    resetTodo: resetTodo,
    deleteTodo: deleteTodo,
  }
}

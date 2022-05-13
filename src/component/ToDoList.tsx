import React from 'react'
import TodoItem from './TodoItem'

type Props = {
  todos: {
    title: string
    id: number
  }[]
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.todos.map(({ title, id }) => (
        <TodoItem title={title} key={id} />
      ))}
    </div>
  )
}

export default TodoList

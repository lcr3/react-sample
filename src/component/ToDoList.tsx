import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from "../hooks/useTodo"

type Props = {
  todos: Todo[]
}
const TodoList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.todos.map(({ title, id }) => {
        console.log("aaaaaa")
        return(
          <TodoItem title={title} key={`todo_item_${id}`} />
        )
      })}
    </div>
  )
}

export default TodoList

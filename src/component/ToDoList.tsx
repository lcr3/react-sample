import React from 'react'
import TodoItem from '@/component/TodoItem'
import { Todo } from '@/hooks/useTodo'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

type Props = {
  todos: Todo[]
}
const TodoList: React.FC<Props> = (props) => {
  return (
    <>
      <List>
        {props.todos.map(({ id, title }) => {
          return (
            <ListItem key={`list_item_${id}`}>
              <TodoItem title={title} />
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default TodoList

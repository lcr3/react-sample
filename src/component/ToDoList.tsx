import React from 'react'
import TodoItem from '@/component/TodoItem'
import { Todo } from '@/hooks/useTodo'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
} from '@mui/material'

type Props = {
  todos: Todo[]
  onClick: (index: number) => void
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <>
      <List>
        {props.todos.map((value, index) => {
          return (
            <ListItem key={`list_item_${value.id}`}>
              <TodoItem
                index={index}
                title={value.title}
                onClick={props.onClick}
              />
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default TodoList

import React from 'react'
import { Avatar, Button, ListItemAvatar } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'

type Props = {
  index: number
  title: string
  onClick: (index: number) => void
}

const TodoItem: React.FC<Props> = (props) => {
  const handleDeleteOnClick = () => {
    props.onClick(props.index)
  }

  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <EventIcon />
        </Avatar>
      </ListItemAvatar>
      {props.title}
      <Button onClick={handleDeleteOnClick}>削除</Button>
    </>
  )
}

export default TodoItem

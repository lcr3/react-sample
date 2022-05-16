import React, { useState, useRef } from 'react'

type Props = {
  onClick: (title: string) => void
}

const TodoInput: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const inputValue = inputRef?.current?.value || ""
    props.onClick(inputValue)
  }

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="新規ToDoを入力してください"
      ></input>
      <button onClick={handleClick}>登録</button>
    </div>
  )
}

export default TodoInput

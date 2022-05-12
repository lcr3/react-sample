import React, { useState } from 'react'

type Props = {
  onClick: (title: string) => void
}

const TodoInput: React.FC<Props> = (props) => {
  const [inputState, setInputState] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed')
    setInputState(e.target.value)
    console.log(inputState)
  }

  const handleClick = () => {
    const inputValue = inputState
    props.onClick(inputValue)
  }

  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="新規ToDoを入力してください"
      ></input>
      <button onClick={handleClick}>登録</button>
    </div>
  )
}

export default TodoInput

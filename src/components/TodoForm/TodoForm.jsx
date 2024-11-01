import TodoButton from '../TodoButton/TodoButton'
import { useState } from 'react'
import './TodoForm.css'

export const TodoForm = ({addTask}) => {
	const [ userInput, setUserInput ] = useState('')
	const handleChange = (event) => {
		setUserInput(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		addTask({userInput})
		setUserInput('')
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='todo-form'>
				<input
					className='todo-input'
					type='text'
					placeholder='Add a new task..'
					onChange={handleChange}
					value={userInput}
				/>
				<TodoButton text={'Save'} />
			</form>
		</>
	)
} 

export default TodoForm
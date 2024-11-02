import TodoForm from './components/TodoForm/TodoForm'
import TodoItems from './components/TodoItems/TodoItems'
import { useState } from 'react'
import './App.css'

export default function App() {
    const [todos, setTodos] = useState([])

	const addTask = (userInput) => {
		if (userInput) {
			const newTask = {
				id: Date.now(),
				task: userInput,
				completed: false,
			}
			setTodos([newTask, ...todos])
		} 
	}
	console.log(todos)

	const toggleTask = (id) => {
		setTodos(todos.map((todo) => todo.id === id ? 
		{...todo, completed: !todo.completed } : {...todo}))
			
	}

	const removeTask = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

    return (
				<div className='container'>
					<div className='TodoMain'>
						<h1>Notes To</h1>
						<TodoForm addTask={addTask} />
						{todos.map((todo) => (
							<TodoItems 
								todo={todo} 
								key={todo.id} 
								toggleTask={toggleTask} 
								removeTask={removeTask} 
							/>
						))}
					</div>
				</div>
		)
}
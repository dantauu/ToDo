import { Krest } from "../Krest/Krest"
import './TodoItems.css'

const TodoItems = ( { todo, toggleTask, removeTask } ) => {
    return (
		<div className="main-task">
			<div className="main-task__text" onClick={() => toggleTask(todo.id)}>
				{todo.task}
				</div>
				<div className='TodoIcon'>
					<Krest onClick={() => removeTask(todo.id)} />
				</div>
			</div>
		)
}

export default TodoItems
import icon from "../../assets/sun.svg"
import "./Sun.css"

export const SunIcon = () => {
    return (
        <button className='sun-btn'>
			<img className='sun-img' src={icon} alt='light' />
		</button>
    )
}
import './Krest.css'
import krest from '../../assets/krest.png'

export const Krest = ({ onClick }) => {
	return (
		<button className='button-krest' onClick={onClick}>
			<img className='krest-img' src={krest} alt='' />
		</button>
	)
}

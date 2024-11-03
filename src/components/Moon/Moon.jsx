import moon from '../../assets/moon.png'
import './Moon.css'

export const Moon = ({ onClick }) => {
    return (
        <button className='moon-btn' onClick={onClick}>
            <img className='moon-img' src={moon} alt='' />
        </button>
    )
}

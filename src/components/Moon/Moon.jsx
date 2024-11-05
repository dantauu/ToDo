import moon from '../../assets/moon.png'
import './Moon.css'

export const Moon = () => {
    return (
        <button className='moon-btn'>
            <img className='moon-img' src={moon} alt='' />
        </button>
    )
}

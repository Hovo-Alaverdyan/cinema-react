import logo from '../images/movielogy.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className='fixed w-full flex justify-center items-center bg-black/40 p-6 sm:px-24 z-10 '>
        <Link className=' cursor-pointer w-[150px] sm:w-[180px]' to='/'>
          <img src={logo} alt="logoimage" />
        </Link>
      </nav>
    </div>
  )
}

import navbarImg from '../assets/navbar.jpg';
import logo from '../assets/logo1.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='w-full max-h-20 flex justify-between items-center px-4'
            style={
                {
                    background: `url(${navbarImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }
            >
                {/* <img className='h-16 w-full object-cover' src={navbarImg} alt="nav img" /> */}
                <div className='flex justify-center items-center p-6 gap-2'>
                    <img className='w-12 md:w-14' src={logo} alt="logo" />
                    <h2 className='text-lg md:text-2xl font-semibold'>Espresso Emporium</h2>
                </div>
                <div className='mr-6 space-x-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/signin'>Register</NavLink>
                    <NavLink to='/users'>User</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
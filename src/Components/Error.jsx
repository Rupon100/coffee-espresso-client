import { Link } from 'react-router-dom';
import errorImg from '../assets/404.gif';

const Error = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='text-center'>
                <img className='w-44 md:w-96' src={errorImg} alt="error" />
                <Link to='/' className='px-4 py-2 bg-slate-600 text-white'>Back to home</Link>
            </div>
        </div>
    );
};

export default Error;
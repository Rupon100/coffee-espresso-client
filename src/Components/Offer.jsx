import aroma from '../assets/1.png' ;
import quality from '../assets/2.png';
import rosting from '../assets/4.png';
import grades from '../assets/3.png';

const Offer = () => {
    return (
        <div className="bg-[#ECEAE3] text-[#331A15] p-6 md:px-14 px-8  flex justify-center items-center">
            <div className='max-w-4xl flex flex-col md:flex-row justify-center items-center gap-4'>
                <div className='p-2 flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <img className='w-14' src={aroma} alt="aroma" />
                    <h2 className='font-semibold text-lg'>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='p-2 flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <img className='w-14' src={quality} alt="quality" />
                    <h2 className='font-semibold text-lg'>Pure Quality</h2>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='p-2 flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <img className='w-14' src={grades} alt="grads" />
                    <h2 className='font-semibold text-lg'>Proper Grades</h2>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='p-2 flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <img className='w-14' src={rosting} alt="roasting" />
                    <h2 className='font-semibold text-lg'>Proper Roasting</h2>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;
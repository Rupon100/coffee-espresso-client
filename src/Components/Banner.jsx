import bannerImg from '../assets/banner.png'
import Main from './Main';
import Offer from './Offer';

const Banner = () => {
    return (
        <div>
            <div>
                <div className="flex justify-center items-center  min-h-[500px] md:min-h-[90vh] p-8 md:p-12"
                style={{
                    background: `url(${bannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                >
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="w-1/2 flex flex-col justify-start items-start gap-2 md:gap-4">
                        <h1 className='text-2xl md:text-4xl font-semibold'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='text-lg'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='border p-2 text-black bg-slate-100'>Learn More</button>
                    </div>
                </div>
            </div>
            <Offer></Offer>
            <Main></Main>
        </div>
    );
};

export default Banner;
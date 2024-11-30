import PopularText from "./PopularText";
import Products from "./Products";
import productsUp from '../assets/pup.png';
import productsDown from '../assets/5.png';

const Main = () => {
    return (
        <div className="relative"> 
            <div className="absolute top-8">
                <img className="w-24 md:w-44" src={productsUp} alt="" />
            </div>
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-4 py-12">
               <PopularText></PopularText>
               <Products></Products>
            </div>
            <div className="absolute right-0 bottom-0">
                <img className="w-24 md:w-44" src={productsDown} alt="" />
            </div>
        </div>
    );
};

export default Main;
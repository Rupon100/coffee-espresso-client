import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";

const PopularText = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center gap-4">
            <p className="text-gray-700">--- slip & Savor --- </p>
            <h2 className="font-semibold text-3xl text-[#331A15]">Our Popular Products</h2>
            <Link to='/addcoffee' className="border border-[#331A15] px-4 py-2 rounded bg-[#E3B577] text-black flex items-center gap-2">
                <h2> Add Coffee</h2>
                <GiCoffeeCup />
            </Link>
        </div>
    );
};

export default PopularText;
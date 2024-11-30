import { useContext, useEffect } from "react";
import Product from "./Product";
import { authContext } from "../AuthProvider/AuthProvider";


const Products = () => {

    const { coffees, setCoffees } = useContext(authContext);

    // const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('https://espresso-server-rho.vercel.app/coffee')
        .then(res => res.json())
        .then(data => {
            setCoffees(data);
            console.log(data);
        })
    } ,[])

    return (
        <div className="min-h-[600px] p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                coffees.map(coffee => <Product key={coffee._id} coffee={coffee}></Product>)
            }
        </div>
    );
};

export default Products;
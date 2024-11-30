import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import addCoffeebg from '../assets/11.png';


/*
https://i.ibb.co.com/t3PpWFy/2.png
https://i.ibb.co.com/dPjCwnf/3.png
https://i.ibb.co.com/5jqJk4N/4.png
https://i.ibb.co.com/W6T3SF0/5.png
https://i.ibb.co.com/Lg2Z354/6.png
*/


const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, price, supplier, details, photo };
    console.log(newCoffee);
    console.log(form)


    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    form.reset();
  })

}

const AddCoffee = () => {
    return (
        <div className="text-black space-y-3 p-8 md:p-12"
        style={{
            background: `url(${addCoffeebg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
            <div className="max-w-3xl mx-auto">
               <Link to='/' className="text-center flex items-center gap-2 cursor-pointer">
                  <FaArrowLeftLong />
                  <h3>Back to home</h3>
               </Link>
            </div>
            <div className="max-w-3xl mx-auto bg-[#F4F3F0] p-4 md:p-10 flex flex-col gap-4 justify-center items-center">
                <h2 className="text-xl md:text-2xl font-semibold">Add New Coffee</h2>
                <form onSubmit={handleAdd} className="w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                          <label className="label">
                            <span className="label-text">Price</span>
                          </label>
                          <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                          <label className="label">
                            <span className="label-text">Suppliar</span>
                          </label>
                          <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                          <label className="label">
                            <span className="label-text">Details</span>
                          </label>
                          <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                          </label>
                          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="w-full rounded-lg py-2 my-4 bg-[#D2B48C] text-[#331A15] border border-[#331A15] text-center cursor-pointer">
                        <button type="submit">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Product = ({ coffee }) => {
    const { _id ,name, price, supplier, details, photo } = coffee;

    const { coffees, setCoffees } = useContext(authContext);
     
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    const remaining = coffees.filter(coffee => coffee._id !== id);
                    console.log(data);
                    setCoffees(remaining);

                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee item has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
        });
    }

    // const handleUpdate = (id) => {
    //     fetch(`http://localhost:5000/coffee/${id}`, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }

    return (
        <div className="flex justify-center items-center gap-6 p-4 rounded bg-gray-100 text-black border">
            <div className="flex-1 flex justify-center items-center">
                <img className="w-full h-full object-cover" src={photo} alt="product" />
            </div>
            <div className="flex-grow flex-1 flex flex-col justify-center items-center gap-2">
                <h2 className="font-semibold text-xl">Name: <span className="font-base">{name}</span></h2>
                <h2 className="font-semibold text-xl">Supplier: <span className="font-base">{supplier}</span></h2>
                <h2 className="font-semibold text-xl">Price: <span className="font-base">{price}</span></h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <button className="btn bg-[#D2B48C] text-white"><FaEye /></button>
                <Link to={`/update/${_id}`} className="btn bg-[#3C393B] text-white"><CiEdit /></Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] text-white"><MdDelete /></button>
            </div>
        </div>
    );
};

export default Product;
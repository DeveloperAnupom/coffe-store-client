import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeItem = ({ coffee, coffees, setCoffees }) => {


    const { _id, name, quantity, supplier, test, category, details, image } = coffee;

    const handleDelete = (_id) => {
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
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffeeItem => coffeeItem._id !== _id);
                            setCoffees(remaining)
                        };
                    })
            }
        });
    }

    return (
        <div>
            <div className="card card-side flex justify-center items-center px-4 bg-base-100 shadow-xl border-2 border-gray-500 rounded-xl w-4/4 mx-auto">
                <figure className="w-6/12">
                    <img src={image} className="h-full" alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{test}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-5">
                        <button className="btn bg-yellow-200 join-item text-xl"><FaEye /></button>
                        <Link to={`/update-coffe/${_id}`}>
                            <button className="btn bg-green-600 join-item text-xl"><MdEdit /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 join-item text-xl">
                            <MdDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeItem;
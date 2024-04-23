import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, test, category, details, image } = coffee;


    const updateCoffee = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const image = form.image.value;
        const coffee = { name, quantity, supplier, test, category, details, image };
        console.log(coffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
        // form.reset()
    }
    return (
        <div>
            <div className="bg-purple-100 text-center my-10 p-10 w-7/12 mx-auto rounded-xl">
                <div>
                    <h2 className="text-3xl font-bold text-amber-600">Update Coffee</h2>
                </div>
                <div className="w-8/12 mx-auto border-2 border-gray-500 my-5 rounded-xl">
                    <form className="card-body" onSubmit={updateCoffee}>
                        {/* form row coffee name and quantity*/}
                        <div className="flex gap-3 justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" defaultValue={name} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" defaultValue={quantity} name="quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row supplier and test */}
                        <div className="flex gap-3 justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="test" defaultValue={supplier} name="supplier" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Test</span>
                                </label>
                                <input type="test" defaultValue={test} name="test" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row category and details*/}
                        <div className="flex gap-3 justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" defaultValue={category} name="category" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" defaultValue={details} name="details" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row image url*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="url" defaultValue={image} name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Update Coffee</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffe;
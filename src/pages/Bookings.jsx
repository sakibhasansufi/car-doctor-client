import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url])




    // delete functionality
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method : "DELETE"
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"

                        });
                        const remaining = bookings.filter(booking=>booking._id !==id);
                        setBookings(remaining);
                    }
                })
            }
        })
    }



    // update functionality
    const handleBookingConfirm = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to confirm the order",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: 'confirm' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Confirmed",
                                text: "Your order has benn confirmed",
                                icon: "success"
    
                            });
                            // update state
                            const remaining = bookings.filter(booking => booking._id !== id);
                            const updated = bookings.find(booking => booking._id === id);
                            updated.status = 'confirm'
                            const newBookings = [updated, ...remaining];
                            setBookings(newBookings);
                        }
                    })
            }
        })
       
    }



    return (
        <div>
            {bookings.length}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingTable
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div >
            <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                <img src={img} alt="" />
                <div className="grid gap-2">
                    <h1 className="text-lg font-semibold ">{title}</h1>


                    <div className="text-lg font-semibold text-[#FF3811] flex items-center justify-between">
                        ${price}
                        <Link to={`/book/${_id}`}><span className="cursor-pointer"><FaArrowRight /></span></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServiceCard;
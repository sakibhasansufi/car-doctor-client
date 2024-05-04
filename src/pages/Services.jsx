import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center space-y-3">
                <h2 className="text-[#FF3811] font-medium">Services</h2>
                <h4 className="text-5xl font-bold">Our Service Area</h4>
                <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or Randomisedbr <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="mt-8 space-y-5 grid grid-cols-1 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>

        </div>
    );
};

export default Services;
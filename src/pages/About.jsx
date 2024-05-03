import img1 from '../assets/images/about_us/person.jpg'
import img2 from '../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className='relative w-1/2'>
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl h-[473px]" />
                    <img src={img2} className="absolute top-40 border-[10px] border-white left-56  h-[332px] w-1/2 max-w-sm rounded-lg shadow-2xl " />
                </div>


                <div className='w-1/2'>
                    <h1 className="text-xl text-[#FF3811] font-medium">About Us</h1>
                    <p className="py-6 w-[376px] text-5xl font-bold">We are qualified & of experience in this field</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='mt-5 mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn text-white bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
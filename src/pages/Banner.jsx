import item1 from '../assets/images/banner/1.jpg'
import item2 from '../assets/images/banner/2.jpg'
import item3 from '../assets/images/banner/3.jpg'
import item4 from '../assets/images/banner/4.jpg'
import item5 from '../assets/images/banner/5.jpg'
import item6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <section className='mt-8'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={item1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex  h-full  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">

                        <div className=' text-white space-y-5 pl-20 pt-64'>
                            <h2 className='text-6xl font-bold w-[463px]'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='bg-[#FF3811] p-4 font-medium rounded'>Discover more</button>
                                <button className=' p-4 font-medium rounded border-2 '>Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                        <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>

                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={item2} className="w-full rounded-xl" />
                    <div className="absolute flex rounded-xl h-full  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">

                        <div className=' text-white space-y-5 pl-20 pt-64'>
                            <h2 className='text-6xl font-bold w-[463px]'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='bg-[#FF3811] p-4 font-medium rounded'>Discover more</button>
                                <button className=' p-4 font-medium rounded border-2 '>Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                        <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>

                    </div>

                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={item3} className="w-full rounded-xl" />
                    <div className="absolute flex rounded-xl h-full  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">

                        <div className=' text-white space-y-5 pl-20 pt-64'>
                            <h2 className='text-6xl font-bold w-[463px]'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='bg-[#FF3811] p-4 font-medium rounded'>Discover more</button>
                                <button className=' p-4 font-medium rounded border-2 '>Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>

                    </div>

                </div>

             
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={item4} className="w-full rounded-xl" />
                    <div className="absolute flex rounded-xl h-full  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">

                        <div className=' text-white space-y-5 pl-20 pt-64'>
                            <h2 className='text-6xl font-bold w-[463px]'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='bg-[#FF3811] p-4 font-medium rounded'>Discover more</button>
                                <button className=' p-4 font-medium rounded border-2 '>Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>

                    </div>

                </div>

              
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={item5} className="w-full rounded-xl" />
                    <div className="absolute flex rounded-xl  h-full  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">

                        <div className=' text-white space-y-5 pl-20 pt-64'>
                            <h2 className='text-6xl font-bold w-[463px]'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='bg-[#FF3811] p-4 font-medium rounded'>Discover more</button>
                                <button className=' p-4 font-medium rounded border-2 '>Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>

                    </div>

                </div>

               
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={item6} className="w-full rounded-xl" />
                    <div className="absolute flex rounded-xl h-full  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0)">

                        <div className=' text-white space-y-5 pl-20 pt-64'>
                            <h2 className='text-6xl font-bold w-[463px]'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg w-[522px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='bg-[#FF3811] p-4 font-medium rounded'>Discover more</button>
                                <button className=' p-4 font-medium rounded border-2 '>Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href="#slide5" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>

                    </div>

                </div>  


            </div>
        </section>

    );
};

export default Banner;
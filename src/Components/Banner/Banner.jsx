import BannerImg from '../../assets/Banner/Banner.png'
const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute text-center top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]'>
                <h1 className='text-white text-6xl font-bold text-center leading-[60px] tracking-wide'>Discover an exciting way of eating healthy </h1>
                <p className='text-white text-xl font-thin  mt-3'>You dont know how much you are missing out until you try it your self. With us, you can take a step without worrying about the any mistake.</p>

                <div className='flex gap-7 justify-center mt-7'>
                    <button className='btn rounded-full px-5 text-lg bg-[#0be58a] border-none hover:bg-white hover:text-[#068f56]'>Explore now</button>
                    <button className='btn rounded-full px-5 text-lg bg-transparent text-white hover:bg-[#0be58a]'>Feedbacks</button>
                </div>
            </div>
            
            <div>
                <img src={BannerImg} />
            </div>

        </div>
    );
};

export default Banner;
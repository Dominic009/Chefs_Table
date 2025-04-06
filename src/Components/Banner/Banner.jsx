import BannerImg from "../../assets/Banner/Banner.png";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="w-full aspect-[16/9] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-xl md:text-4xl lg:text-6xl font-bold text-center lg:leading-[60px] tracking-wide md:w-[60%] lg:w-[80%]">
          Discover an exciting way of eating healthy{" "}
        </h1>
        <p className="text-white text-xs md:text-lg lg:text-xl text-center font-thin lg:mt-3">
          You don’t know how much you are missing out until you try it yourself.{" "}
          <span className="hidden md:block">
            With us, you can take a step without worrying about any mistake.
          </span>
        </p>

        <div className="flex gap-7 justify-center md:mt-7 scale-[50%] md:scale-100">
          <button className="btn rounded-full px-5 text-lg bg-[#0be58a] border-none hover:bg-white hover:text-[#068f56]">
            Explore now
          </button>
          <button className="btn rounded-full px-5 text-lg bg-transparent text-white hover:bg-[#0be58a]">
            Feedbacks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

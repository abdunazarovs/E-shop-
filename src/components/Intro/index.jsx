import IntroCarousel from "./IntroCarousel";
import MenuBar from "./Menu";
const index = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="intro_wrapper flex border rounded-md bg-white  px-[14px] h-[400px] gap-[10px]">
          <MenuBar />
          <IntroCarousel />
          <div className="ml-[10px] flex flex-col justify-between">
            <div className="card w-[200px] h-[110px] bg-[#F38332] rounded-md p-4 text-white">
              <p>Get US $10 off with a new supplier</p>
            </div>
            <div className="card w-[200px] h-[110px] bg-[#55BDC3] rounded-md p-4 text-white">
              <p>Get US $10 off with a new supplier</p>
            </div>
            <div className="card w-[200px] h-[110px] bg-[#127FFF] rounded-md p-4 text-white">
              <p>Get US $10 off with a new supplier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

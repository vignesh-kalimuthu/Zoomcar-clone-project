import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

const App = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center mb-14">
        <div className="py-5 px-5 bg-black bg-opacity-40 text-center">
          <h1 className="text-white text-3xl font-bold">HEAR FROM OUR GUESTS</h1>
        </div>
      </div>

      <Slider {...settings}>
      <div className="w-52  px-2 bg-stone-200 shadow-lg rounded-lg">
      <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-200 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={process.env.PUBLIC_URL + "/guest_one.png"} alt="Customer" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center">Jack</h3>
      <p className="mt-2 text-xl text-center text-white">Flattered with availability of well maintained cars</p>
    </div>

    <div className="w-52 px-2  bg-stone-200 shadow-lg rounded-lg ">
      <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-200 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={process.env.PUBLIC_URL + "/guest_one.png"} alt="Customer" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center">Ram</h3>
      <p className="mt-2 text-xl text-center text-white">Flattered with availability of well maintained cars</p>
    </div>

    <div className="w-52 px-2 bg-stone-200 shadow-lg rounded-lg">
      <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-200 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={process.env.PUBLIC_URL + "/guest_one.png"} alt="Customer" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center">Ravi</h3>
      <p className="mt-2 text-xl text-center text-white">Booked a XUV with unlimited kms, very happy with Zoomcar's servi</p>
    </div>

    <div className="w-52 px-2 bg-stone-400 shadow-lg rounded-lg">
      <div className="flex items-center justify-center h-24 w-24 mx-auto bg-gray-200 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={process.env.PUBLIC_URL + "/guest_one.png"} alt="Customer" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center">Jack</h3>
      <p className="mt-2 text-xl text-center text-white">Flattered with availability of well maintained cars</p>
    </div>
      </Slider>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <svg className="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 18l-6-6 6-6" />
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <svg className="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15 6l6 6-6 6" />
      </svg>
    </button>
  );
};

export default App;

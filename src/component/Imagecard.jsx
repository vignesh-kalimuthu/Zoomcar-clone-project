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
      <div className="flex flex-col items-center mb-8">
        <div className="py-5 px-5 bg-black bg-opacity-40 text-center">
          <h1 className="text-white text-3xl font-bold">Book your drive now!</h1>
        </div>
      </div>

      <Slider {...settings}>
        <div className="max-w-sm bg-white rounded overflow-hidden shadow-2xl relative">
          <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + "/security.png"} alt="Card" />
          <div className="absolute bottom-0 left-0 right-0  bg-opacity-75 py-4 text-white text-center">
            <div className="font-bold text-4xl">Zero Security Deposit</div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded overflow-hidden shadow-2xl relative">
          <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + "/travel.png"} alt="Card" />
          <div className="absolute bottom-0 left-0 right-0  bg-opacity-75 py-4 text-white text-center">
            <div className="font-bold text-4xl">Enjoy Unlimited Kilometers</div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded overflow-hidden shadow-2xl relative">
          <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + "/security.png"} alt="Card" />
          <div className="absolute bottom-0 left-0 right-0  bg-opacity-75 py-4 text-white text-center">
            <div className="font-bold text-4xl">Zero Security Deposit</div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded overflow-hidden shadow-2xl relative">
          <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + "/security.png"} alt="Card" />
          <div className="absolute bottom-0 left-0 right-0  bg-opacity-75 py-4 text-white text-center">
            <div className="font-bold text-4xl">Enjoy Unlimited Kilometers</div>
          </div>
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

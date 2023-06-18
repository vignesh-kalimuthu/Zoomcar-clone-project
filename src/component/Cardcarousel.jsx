import React from 'react';
import Slider from 'react-slick';
import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaTable, FaThumbsUp, FaRoad, FaCog, FaGasPump, FaSun, FaCogs, FaVideo } from 'react-icons/fa';



const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} prev-arrow`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '-30px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '5px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} next-arrow`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '50%',
        right: '-30px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '5px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      
    </button>
  );
};


const ECommerceCard = ({ data }) => {
  const { imgAlt, imgSrc, rating, title, description, availableDate, price, location } = data;

  return (
    <a href="#" className="flex flex-col">
      <Card imgAlt={imgAlt} imgSrc={imgSrc} className="w-56">
        <div className="flex items-center mb-1">
          <Rating>
            <Rating.Star />
            <p className="text-xs font-bold text-gray-900 dark:text-white ml-2">
              {rating}
            </p>
          </Rating>
        </div>
        <h5 className="text-left text-sm font-semibold text-gray-900 dark:text-white mt-1">
          {title}
        </h5>
        <p className="text-left text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        <hr className="my-1" />
        <p className="text-left text-xs text-gray-500 dark:text-gray-400 mt-1">{availableDate}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            &#8377;{price}
          </span>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1 text-cyan-900" />
            <a
              className="rounded-lg bg-cyan-700 px-2 py-1 text-xs font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              {location}
            </a>
          </div>
        </div>
      </Card>
    </a>
  );
};

const App = () => {
  const cardData = [
    {
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      imgSrc: process.env.PUBLIC_URL + '/car.png',
      rating: 4.95,
      title: "Tata Safari 2022",
      description: "Automatic . Diesel . 7 Seats",
      availableDate: "Available from 19 June",
      price: "599/hr",
      location: "Bangalore"
    },
    {
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      imgSrc: process.env.PUBLIC_URL + '/car.png',
      rating: 4.95,
      title: "Tata Safari 2022",
      description: "Automatic . Diesel . 7 Seats",
      availableDate: "Available from 19 June",
      price: "599/hr",
      location: "Bangalore"
    },
    // Add more card data objects here
    {
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      imgSrc: process.env.PUBLIC_URL + '/car.png',
      rating: 4.95,
      title: "Tata Safari 2022",
      description: "Automatic . Diesel . 7 Seats",
      availableDate: "Available from 19 June",
      price: "599/hr",
      location: "Bangalore"
    },
    {
      imgAlt: "Apple Watch Series 7 in colors pink, silver, and black",
      imgSrc: process.env.PUBLIC_URL + '/car.png',
      rating: 4.95,
      title: "Tata Safari 2022",
      description: "Automatic . Diesel . 7 Seats",
      availableDate: "Available from 19 June",
      price: "599/hr",
      location: "Bangalore"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
        <section className="car-categories-container">
      <section className="car-categories" style={{ display: 'flex', }}>
        <section className="car-category" style={{ marginRight: '10px' }}>
          <div className="car-category-icon car-category-icon-selected">
            <FaTable />
          </div>
          <div className="car-category-text car-category-text-selected">
            All
          </div>
        </section>
        <section className="car-category" style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaThumbsUp />
          </div>
          <div className="car-category-text">
            Luxury Car
          </div>
        </section>
        <section className="car-category" style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaRoad />
          </div>
          <div className="car-category-text">
            Road Trip
          </div>
        </section>
        <section className="car-category" style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaCog />
          </div>
          <div className="car-category-text">
            Automatic
          </div>
        </section>
        <section className="car-category" style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaGasPump />
          </div>
          <div className="car-category-text">
            Diesel
          </div>
        </section>
        <section className="car-category" style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaSun />
          </div>
          <div className="car-category-text">
            Sunroof
          </div>
        </section>
        <section className="car-category"style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaCogs />
          </div>
          <div className="car-category-text">
            Cruise Control
          </div>
        </section>
        <section className="car-category" style={{ marginRight: '30px' }}>
          <div className="car-category-icon">
            <FaVideo />
          </div>
          <div className="car-category-text">
            360° Cam
          </div>
        </section>
      </section>
    </section>
  );
          <Slider {...settings}>
            {cardData.map((data, index) => (
              <ECommerceCard key={index} data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default App;

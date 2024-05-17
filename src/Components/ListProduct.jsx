import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick-theme.css";
const ListProduct = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const product = [
        {
          id: "1",
          name: "3 bedroom detached house for sale",
          image:
            "https://assets-global.website-files.com/65e313ade6faceda604f906a/65e714973ff8a8ad04b2260d_Placeholder%20Image-4.jpg",
          price: "3000000",
          location: "8.732 sqft lot London in UK",
          category: "2bed 1bath 818sqft 5,619sqft lot",
        },
        {
          id: "2",
          name: "3 bedroom detached house for sale",
          image:
            "https://assets-global.website-files.com/65e313ade6faceda604f906a/65e70bd79c21a26b64ff1e41_Placeholder%20Image.jpg",
          price: "2500000",
          location: "8.732 sqft lot London in UK",
          category: "2bed 1bath 818sqft 5,619sqft lot",
        },
        {
          id: "3",
          name: "3 bedroom detached house for sale",
          image:
            "https://assets-global.website-files.com/65e313ade6faceda604f906a/65e70e00a8098289b0e42dfe_Placeholder%20Image-2.jpg",
          price: "2000000",
          location: "8.732 sqft lot London in UK",
          category: "2bed 1bath 818sqft 5,619sqft lot",
        },
        {
          id: "3",
          name: "3 bedroom detached house for sale",
          image:
            "https://assets-global.website-files.com/65e313ade6faceda604f906a/65e70e00a8098289b0e42dfe_Placeholder%20Image-2.jpg",
          price: "2000000",
          location: "8.732 sqft lot London in UK",
          category: "2bed 1bath 818sqft 5,619sqft lot",
        },
      ];
  return (
    <div>
        <p className=" text-5xl font-bold">Featured</p>
            <p className="text-lg py-10">
              Discover our curated selection of luxury properties
            </p>
            <div className="slider-container font-serif">
              <Slider {...settings}>
                {product.map((data) => (
                  <div key={data.id} className="Multiple_box ml-5 relative">
                    <img src={data.image} className="p-3 w-[100%]"></img>
                    <p className="flex ml-5 p-1 text-lg text-gray-300">
                      <FaLocationDot className="mt-1" />
                      {data.location}
                    </p>
                    <span className="ml-6 font-bold text-2xl">
                      ${data.price}
                    </span>
                    <p className="ml-6 font-medium text-xl py-1">{data.name}</p>
                    <p className="ml-6 ">{data.category}</p>
                    <div className="absolute top-6 left-[83%] text-4xl text-white font-extrabold ">
                      <CiHeart />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
    </div>
  )
}

export default ListProduct
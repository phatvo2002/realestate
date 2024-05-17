import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../Assets/65edf7208dc418fda456ebd3_hero-v1.png";
import icon1 from "../Assets/iconhouse.svg";
import icon2 from "../Assets/icon1.svg";
import icon3 from "../Assets/iconprotect.svg";
import iconcheck from "../Assets/checkicon.svg";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ListProduct from "../Components/ListProduct";
const Home = () => {
  return (
    <div>
      <div>
        <Container fluid="sm">
          <Row>
            <Col xs={12}>
              <div className="home_box flex">
                <div className="w-[40%] px-7">
                  <p className="mt-14">Welcome to Airestates</p>
                  <h1 className="font-bold text-5xl">
                    Find Your Dream Home Today
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Enter
                    your email
                  </p>
                  <div>
                    <form className="relative">
                      <input
                        type="text"
                        className="p-4 rounded-full w-[100%]"
                        placeholder="Input Your Email"
                      ></input>
                      <input
                        type="submit"
                        value="Get Started"
                        className="absolute top-2 right-2 bg-green-700 p-3 rounded-full text-white hover:bg-black hover:text-white hover:transition delay-150 duration-300 "
                      ></input>
                    </form>
                  </div>
                </div>
                <div className="w-[60%]">
                  <img
                    src={Banner}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginLeft: "",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div className="py-10 text-center">
            <p className="font-bold text-4xl">
              {" "}
              Find Your Dream Home with Ease
            </p>
          </div>
          <Row>
            <div className="flex justify-between">
              <div className="pr-2">
                <img src={icon1} />
                <p className="py-2 font-bold text-2xl">
                  Explore Property Listings
                </p>
                <p className="text-size-regular ">
                  Our user-friendly search functionality allows you to easily
                  find properties that match your criteria.
                </p>
              </div>
              <div className="pr-2">
                <img src={icon2} />
                <p className="py-2 font-bold text-2xl">
                  Explore Property Listings
                </p>
                <p className="text-size-regular ">
                  Our user-friendly search functionality allows you to easily
                  find properties that match your criteria.
                </p>
              </div>
              <div>
                <img src={icon3} />
                <p className="py-2 font-bold text-2xl">
                  Explore Property Listings
                </p>
                <p className="text-size-regular ">
                  Our user-friendly search functionality allows you to easily
                  find properties that match your criteria.
                </p>
              </div>
            </div>
          </Row>
          <Row className="pt-20">
            <ListProduct />
          </Row>
        </Container>
      </div>

      <div className="font-serif mt-28">
        <Container fluid="sm">
          <Row>
            <Col xs={8}>
              <p className="pt-10 font-medium">Our Services</p>
              <p className="py-2 text-6xl font-bold">
                Explore the myriad ways we can be of assistance.
              </p>
              <p className="py-2 text-lg">
                Discover our curated selection of luxury properties.
              </p>
            </Col>
            <Col xs={4} className="pt-10">
              <Link className="ml-60 mt-52  text-green-700 border-1 border-green-700 hover:bg-green-700 hover:text-white text-medium font-lg no-underline p-4 rounded-full  hover:transition delay-150 duration-200">
                See More
              </Link>
            </Col>
          </Row>
          <div className="flex justify-between mt-24">
            <div className="style_boxshadow  rounded-sm h-[490px]">
              <div className="p-7">
                <p className="text-xl font-medium">01</p>
                <p className="text-4xl font-bold">Buy Properties</p>
                <p className="mt-10 text-lg">
                  Discover a wide range of properties available for purchase.
                  Our expert team will guide you through the buying process,
                  ensuring a seamless experience from start to finish.
                </p>
                <p className="flex my-10">
                  <Link className="no-underline text-black font-medium">
                    Learn More
                  </Link>{" "}
                  <span className="p-1 ml-1">
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
            <div className="style_boxshadow  rounded-sm h-[490px] ml-8">
              <div className="p-7">
                <p className="text-xl font-medium">01</p>
                <p className="text-4xl font-bold">Buy Properties</p>
                <p className="mt-10 text-lg">
                  Discover a wide range of properties available for purchase.
                  Our expert team will guide you through the buying process,
                  ensuring a seamless experience from start to finish.
                </p>
                <p className="flex my-10">
                  <Link className="no-underline text-black font-medium">
                    Learn More
                  </Link>{" "}
                  <span className="p-1 ml-1">
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
            <div className="style_boxshadow  rounded-sm h-[490px] ml-8">
              <div className="p-7">
                <p className="text-xl font-medium">01</p>
                <p className="text-4xl font-bold">Buy Properties</p>
                <p className="mt-10 text-lg">
                  Discover a wide range of properties available for purchase.
                  Our expert team will guide you through the buying process,
                  ensuring a seamless experience from start to finish.
                </p>
                <p className="flex my-10">
                  <Link className="no-underline text-black font-medium">
                    Learn More
                  </Link>{" "}
                  <span className="p-1 ml-1">
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Row>
            <Col xs="6">
              <div className="bg-green-300 analysis-image-wrapper h-[600px] mt-10"></div>
            </Col>
            <Col xs="1"></Col>
            <Col xs="5" className="pt-20">
              <p className="font-bold text-5xl">
                Discover the Power of Our Proprietary Market Analysis Tool
              </p>
              <p className="mt-2 text-lg">
                Gain valuable insights and make informed decisions with our
                advanced market analysis tool. It provides accurate and
                up-to-date information to help you navigate the real estate
                market with confidence.
              </p>
              <p className="flex mt-10">
                <img src={iconcheck} />
                <span className="ml-3">
                  Uncover hidden market trends and opportunities
                </span>
              </p>
              <p className="flex">
                <img src={iconcheck} />
                <span className="ml-3">
                  Make data-driven decisions for successful property
                  transactions
                </span>
              </p>
              <p className="flex ">
                <img src={iconcheck} />
                <span className="ml-3">
                  Get personalized support from our dedicated team of experts
                </span>
              </p>
              <div className="mt-10">
                <Link className="p-3  pt-14 no-underline border-1 border-green-700 text-green-700 text-lg rounded-full hover:bg-green-700 hover:text-white hover:transition delay-150 duration-100">
                  See More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

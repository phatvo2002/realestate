import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        menuItems.forEach((i) => i.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });

  return (
    <div>
      <Container fluid="sm">
        <Row>
          <Col xs={8} className="my-3">
            <Row className="py-2">
              <Col xs={3}>
                <img src={logo} alt="" className="w-[100%] text-base" />
              </Col>
              <Col xs={9}>
                <div>
                  <ul className="flex justify-around text-lg py-2">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Properties</li>
                    <li className="menu-item">Rent</li>
                    <li className="menu-item">Sale</li>
                    <li className="menu-item">About</li>
                    <li className="flex menu-item ">
                      Pages <MdOutlineKeyboardArrowDown />
                    </li>
                    <li className="menu-item">Carts (0)</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <Row>
              <Col xs={4}></Col>
              <Col xs={8}>
                {" "}
                <div className="flex justify-between py-3">
                  <Link
                    to="#"
                    className="border-1 text-center w-[120px] border-green-700 p-3 no-underline text-green-700 rounded-full hover:bg-green-700 hover:text-white hover:transition delay-150 duration-300"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="#"
                    className="p-3 bg-green-700 text-white rounded-full no-underline hover:transition delay-150 duration-300 hover:bg-black hover:text-white"
                  >
                    Contract Us
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Routes from "../Routes/Routers";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes></Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

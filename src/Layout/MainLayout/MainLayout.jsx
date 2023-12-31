/* eslint-disable react/jsx-no-undef */
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main__layout">
      <div className="top section__padding">
        <Header />
      </div>
      <div className="mid section__padding">
        <Outlet />
      </div>
      <div className="bottom section__padding">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

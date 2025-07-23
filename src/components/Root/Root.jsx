import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;

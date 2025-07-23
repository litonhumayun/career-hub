import { Helmet } from "react-helmet-async";
import CategoryList from "../CategoryList/CategoryList";
import { FaCalculator } from "react-icons/fa";

const Category = ({ category }) => {
  const { category_name, logo, availability } = category;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <Helmet>
        <title>Category</title>
      </Helmet>
      <figure className="px-10 pt-10">
        <img src={logo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category_name}</h2>
        <p>{availability}</p>
      </div>
    </div>
  );
};

export default Category;

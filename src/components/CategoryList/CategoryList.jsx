import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { Helmet } from "react-helmet-async";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  return (
    <>
      <Helmet>
        <title>Category List</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-5xl bold py-5">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </>
  );
};

export default CategoryList;

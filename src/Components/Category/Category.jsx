import React from "react";
import classes from "./Category.module.css";
import { categoryInfo } from "./data";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((infos, index) => {
        return <CategoryCard key={index} data={infos} />;
      })}
    </section>
  );
};

export default Category;

import React from "react";
import { categoryInfos } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => {
        // console.log(infos)
        return <CategoryCard categoryData={infos} />;
      })}
    </section>
  );
}

export default Category;

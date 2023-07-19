import React from "react";
import Layout from "../components/Layout";

const Category = (props) => {
  return (
    <Layout>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
};

export default Category;

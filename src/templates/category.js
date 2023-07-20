import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Alert from "../components/Alert";

const Category = ({ data }) => {
  const { products } = data;
  return (
    <Layout>
      {products.edges.length === 0 && (
        <Alert title="Ops...">Nenhum produto disponível nesta categoria</Alert>
      )}
      <div className="flex flex-wrap">
        {products.edges.map((product) => {
          return (
            <div className="w-1/3 m-4 rounded overflow-hidden shadow-lg">
              <Link to={"/" + product.node.slug}>
                <img className="w-full" src={product.node.images.resize.src} />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {product.node.product}
                </div>
                <p class="text-gray-700 text-base">descrição</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Adicionar para o orçamento
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    products: allContentfulProduct(
      filter: {
        categories: {
          product: { elemMatch: { categories: { slug: { eq: $slug } } } }
        }
      }
    ) {
      edges {
        node {
          product
          slug
          images {
            description
            resize(width: 480, height: 320) {
              src
            }
          }
        }
      }
    }
  }
`;

export default Category;

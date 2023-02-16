import ProductPageContent from "../../components/ProductPageContent"
import { getAllProducts, getProduct } from "../../lib/shopify"
import { useEffect } from 'react';

export default function ProductPage({ product }) {
  
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products?limit=4');
  const data = await res.json();

  console.log(data)

  const paths = data.map(item => {

    return {
      params: { product: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const product = context.params.product;
  const res = await fetch('https://fakestoreapi.com/products/' + product);
  const data = await res.json();
  return {
    props: { product: data }
  }
}


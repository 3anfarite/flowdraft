import React from 'react'
import ShopProductCard from './../components/ShopProductCard';

const Shop = ({ products }) => {
  return (

    <div className="bg-cgrey">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-5xl font-bold font-ibm mb-4 text-black">Digital Products</h1>
      <p class="lg:w-2/3 mx-auto font-alt leading-relaxed text-base">{"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them."}</p>
    </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
             products.map(product => (
               <ShopProductCard key={product.id} product={product} />
             ))
           }
          
        </div>
      </div>
    </div>
  )
}

export default Shop

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  const data = await res.json();
  return {
    props: { products: data }
  }
}
import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList'
import { getProductsInCollection } from '../lib/shopify'
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  console.log(products)
  return (
   <div className="">
      <ProductList products={products}/>
   </div>
  )
}

export async function getStaticProps(context){
  const products = await getProductsInCollection()

  return{
    props:{ products },
  }
}

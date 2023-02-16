import Link from "next/link"
import Image from "next/image"
import { formatter } from "../utils/helpers"
import { useEffect } from 'react';

const ProductCard = ({ product }) => {
    // const { handle, title} = product.title
    // const { amount } = product.node.priceRange.minVariantPrice
    // const { altText, url } = product.node.images.edges[0].node
    // const { url } = product.image
    // const { price } = product.price

  
    

  return (
    <Link href={`/products/${product.id}`}>
        <a className="group ">
            <div className="w-full bg-gray-200 overflow-hidden">
                <div className="relative group-hover:opacity-75 h-72">
                    <Image
                    src={product.image}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h3>
            <p className="mt-1 text-sm text-gray-700">{formatter.format(product.price)}</p>
        </a>
        
    </Link>
  )
}

export default ProductCard

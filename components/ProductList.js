import ProductCard from "./ProductCard"
import Image from 'next/image';
import Link from "next/link";


const ProductList = ({ products }) => {
    return (
        <>

            {/* <div className="bg-cgrey">
                <div className="container px-20 py-24 mx-auto">
                    <h2 className="mb-4 text-5xl tracking-tight font-eb font-bold md:text-black text-black ">Digital Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
                        {
                            products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div> */}

            <div className="bg-cgrey">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="mb-4 text-5xl tracking-tight font-eb font-bold md:text-black text-black ">Digital Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={product.image}
                                        alt=''
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 max-w-md hidden md:flex md:mt-8">
                     <Link href="/shop">
                        <a className="inline-flex font-ibm h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
                           See all products
                        </a>
                     </Link>
                  </div>
                </div>
            </div>
        </>



    )
}

export default ProductList



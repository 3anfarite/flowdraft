import Image from "next/image"
import ProductForm from "./ProductForm"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import RecommendedList from "./RecommendedList"
import { useEffect } from "react"

export default function ProductPageContent({ product }) {

  const images = []

  useEffect(() => {
    console.log('product',product )
  }, [])
  

  // product.images.edges.map((image,i)=>{
  //   images.push(
  //     <SwiperSlide key={`slide-${i}`}>
  //       <Image src={image.node.url} alt={image.node.altText} layout="fill" objectFit="cover"/>
  //     </SwiperSlide>
  //   )
  // })

  // SwiperCore.use([Navigation,Pagination])

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md bg-white overflow-hidden  md:w-1/2">
          <div className="relative h-96 w-full">
            {/* <Swiper 
          style={{'--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
          navigation
          pagination={{ clickable: true }}
          className="h-96 rounded-2xl"
          loop="true">
              {images}
          </Swiper> */}
            <Image
              src={product.image}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* <ProductForm product={product}/> */}
      </div>
      <p className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">{product.description}</p>
      {/* <RecommendedList current={product.id} products={product.image}/> */}
    </div>

  )
}

import Image from 'next/image'
import React from 'react'

const ShopProductCard = ({ product }) => {
   return (

      <div key={product.id} href="#" className="group">
         <div className="flex relative">
            <Image
               src={product.image}
               alt=""
               layout='fill'
               className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="px-8 py-10 relative z-10 w-full  bg-yellow opacity-0 hover:opacity-100" >
               <h2 className="tracking-widest text-lg title-font font-bold text-indigo-400 mb-1">{product.title}</h2>
               <h1 className="title-font text-sm font-medium text-black mb-3">{product.category}</h1>
               <p className="leading-relaxed  font-alt ">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
               <h1 className="title-font text-lg font-semibold text-black my-3">${product.price}</h1>
            </div>

         </div>

      </div>

      // <div className="p-4">
      //    <div className="flex relative">
      //       <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={product.image} />
      //       <div className="px-8 py-10 relative z-10 w-full  bg-yellow opacity-0 hover:opacity-100">
      //          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE {product.title}</h2>
      //          <h1 className="title-font text-lg font-medium text-black mb-3">{product.category} </h1>
      //          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
      //       </div>
      //    </div>
      // </div>
   )
}

export default ShopProductCard
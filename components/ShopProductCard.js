import Image from "next/image";
import Currency from "react-currency-formatter";

const ShopProductCard = ({ product }) => {
   return (

      <div className="relative flex flex-col   bg-white z-20  md:p-8 p-6 ">

         <Image
            src={product.preview_url}
            height={200}
            width={200}
            alt=""
            objectFit="contain"
            className="cursor-pointer"
         />
         <h4 className="my-3 link font-medium capitalize">
            {product.name}
         </h4>
         <span className="text-xs  mb-2 line-clamp-2 text-gray-500 link" dangerouslySetInnerHTML={{__html: product.description}} >
         </span>
         <div className="mb-5 mt-2 font-bold text-gray-700">
            <Currency quantity={product.price} currency="USD" />
         </div>
         
      </div>


   )
}

export default ShopProductCard
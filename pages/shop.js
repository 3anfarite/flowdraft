import ShopProductCard from './../components/ShopProductCard';


const shop = ({ products }) => {


  return (

    <div className="bg-cgrey">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-5xl font-bold font-ibm mb-4 text-black">Digital Products</h1>
      <p className="lg:w-2/3 mx-auto font-alt leading-relaxed text-base">{`Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.`}</p>
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

export default shop

export async function getStaticProps() {

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(
    `https://api.gumroad.com/v2/products?access_token=${process.env.ACCESS_TOKEN}&app_id=${process.env.APPLICATION_ID}&app_secret=${process.env.APPLICATION_SECRET}`,
    options
  );
  const data = await res.json();
  const products = data.products


  return {
    props: {
      products,
    },
    revalidate: 3600, // revalidate the page every hour
  };
}
import ShopPage from '../components/ShopPage';


const shop = ({ products }) => {


  return (

    <div className="bg-cgrey">
    <ShopPage products={products} />
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
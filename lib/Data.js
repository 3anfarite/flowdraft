import axios from 'axios';


export async function getDummyData(){

   try {
      const res = await axios.get('https://fakestoreapi.com/products?limit=5');
      const data = await res.json();
      return {
          props: {
              products: data
          }
      }
  } catch (error) {
      console.log(error);
  }
}

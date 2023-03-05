import fetch from "node-fetch";

export async function getProducts() {
  const accessToken = process.env.ACCESS_TOKEN;
  const appSecret = process.env.APPLICATION_SECRET;
  const appId = process.env.APPLICATION_ID;

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(
    `https://api.gumroad.com/v2/products?access_token=${accessToken}&app_id=${appId}&app_secret=${appSecret}`,
    options
  );

  const data = await res.json();

  return data.products;
}
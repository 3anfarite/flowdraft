/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports ={
  nextConfig,
  env:{
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN
  },
  images:{
    domains:
      ['fakestoreapi.com' ,'source.unsplash.com', 'picsum.photos', 'public-files.gumroad.com','dummyimage.com' ]
  }
} 

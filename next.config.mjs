/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API:"https://api.lottaverse.io",
    // API:"http://localhost:5000",
    TOKEN_ADDRESS:"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  }
};

export default nextConfig;

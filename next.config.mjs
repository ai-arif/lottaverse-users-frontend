/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API:"http://localhost:5000",
    TOKEN_NAME:"token",
    OWNER_ADDRESS:"0x089BB7064d27C0b82D935A35ad46b29d943c8D4D",
  }
};

export default nextConfig;

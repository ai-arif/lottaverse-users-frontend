/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API:"http://localhost:5000",
    TOKEN_ADDRESS:"0xc59E7A9D6C9E17c987d872fF87FC4bC13c2E0B80",
  }
};

export default nextConfig;

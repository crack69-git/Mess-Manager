/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse2.mm.bing.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

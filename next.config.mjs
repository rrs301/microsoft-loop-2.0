/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    images:{
        domains:['img.freepik.com']
    }
};

export default nextConfig;

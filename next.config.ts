/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!proofing|api|_next/static|_next/image|favicon.ico).*)', // Redirect everything except allowed routes
        destination: '/proofing',
        permanent: false, // Set to false so it can be disabled later
      },
    ];
  },
};

export default nextConfig;

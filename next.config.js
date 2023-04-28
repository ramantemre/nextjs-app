/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://dbUser:dbUserPassword@cluster0.dcaaf.mongodb.net/nextjs-db?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;

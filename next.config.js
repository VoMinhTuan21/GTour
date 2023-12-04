/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "themes-themegoods.b-cdn.net",
			},
			{
				protocol: "https",
				hostname: "live.staticflickr.com",
			},
			{
				protocol: "https",
				hostname: "themes-themegoods.b-cdn.net",
			},
		],
	},
};

module.exports = nextConfig;

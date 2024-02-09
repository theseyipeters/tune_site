/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom: ["Cairoli Now Extended", "sans-serif"],
			},
			colors: {
				primary: "#fcfcfc",
				secondary: "#8b8b8b", // #17A2
			},
		},
	},
	plugins: [],
};

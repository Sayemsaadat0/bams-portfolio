/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-color": "#0D9276",
				"secondary-color": "#FEEE91",
			},
			fontSize: {
				"w-small-regular-16": [
					"1rem",
					{
						fontWeight: "400",
					},
				],
				"w-paragraph-regular-20": [
					"1.25rem",
					{
						fontWeight: "400",
					},
				],
				"w-title-1-Medium-22": [
					"1.5rem",
					{
						fontWeight: "500",
					},
				],
				"w-title-2-Medium-28": [
					"1.75rem",
					{
						fontWeight: "500",
					},
				],
				"w-title-3-Medium-36": [
					"2.25rem",
					{
						fontWeight: "500",
					},
				],
				"w-title-4-Medium-48": [
					"3rem",
					{
						fontWeight: "600",
					},
				],

				"w-header-1-bold-22": [
					"1.375rem",
					{
						fontWeight: "700",
					},
				],
				"w-header-2-bold-28": [
					"1.75rem",
					{
						fontWeight: "700",
					},
				],
				"w-header-3-bold-42": [
					"2.625rem",
					{
						fontWeight: "700",
					},
				],
				"w-header-4-bold-56": [
					"3.5rem",
					{
						fontWeight: "700",
					},
				],
				"w-header-4-1/2-bold-70": [
					"4.375rem",
					{
						fontWeight: "700",
					},
				],
				"w-header-5-bold-88": [
					"5.5rem",
					{
						fontWeight: "700",
					},
				],
				"w-header-6-bold-106": [
					"6rem",
					{
						fontWeight: "800",
					},
				],
				"w-button-1-20": [
					"1.25rem",
					{
						fontWeight: "500",
					},
				],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("@tailwindcss/typography")],
};

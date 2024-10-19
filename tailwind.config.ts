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
		  "oc-primary-1-50": "#efedf7",
		  "oc-primary-1-100": "#ccc8e6",
		  "oc-primary-1-200": "#b3aeda",
		  "oc-primary-1-300": "#9088c9",
		  "oc-primary-1-400": "#7b71be",
		  "oc-primary-1-500": "#5a4eae",
		  "oc-primary-1-600": "#52479e",
		  "oc-primary-1-700": "#40377c",
		  "oc-primary-1-800": "#322b60",
		  "oc-primary-1-900": "#262149",
  
		  "oc-primary-2-50": "#fef0ed",
		  "oc-primary-2-100": "#fdd2c7",
		  "oc-primary-2-200": "#fbbcac",
		  "oc-primary-2-300": "#fa9d86",
		  "oc-primary-2-400": "#f98a6e",
		  "oc-primary-2-500": "#f76d4a",
		  "oc-primary-2-600": "#e16343",
		  "oc-primary-2-700": "#af4d35",
		  "oc-primary-2-800": "#883c29",
		  "oc-primary-2-900": "#682e1f",
  
		  "oc-primary-3-50": "#fefdf2",
		  "oc-primary-3-100": "#fdf9d8",
		  "oc-primary-3-200": "#fcf6c5",
		  "oc-primary-3-300": "#faf2aa",
		  "oc-primary-3-400": "#f9f099",
		  "oc-primary-3-500": "#f8ec80",
		  "oc-primary-3-600": "#e2d774",
		  "oc-primary-3-700": "#b0a85b",
		  "oc-primary-3-800": "#888246",
		  "oc-primary-3-900": "#686336 ",
  
		  "oc-primary-4-50": "#ecfcf8",
		  "oc-primary-4-100": "#c3f5e9",
		  "oc-primary-4-200": "#a6f1de",
		  "oc-primary-4-300": "#7eeacf",
		  "oc-primary-4-400": "#65e6c5",
		  "oc-primary-4-500": "#3ee0b7",
		  "oc-primary-4-600": "#38cca7",
		  "oc-primary-4-700": "#2c9f82",
		  "oc-primary-4-800": "#227b65",
		  "oc-primary-4-900": "#1a5e4d",
  
		  "oc-black-50": "#e7e7e9",
		  "oc-black-100": "#b5b4bc",
		  "oc-black-200": "#918f9b",
		  "oc-black-300": "#5e5c6e",
		  "oc-black-400": "#3f3d51",
		  "oc-black-500": "#0f0c26",
		  "oc-black-600": "#0e0b23",
		  "oc-black-700": "#0b091b",
		  "oc-black-800": "#080715",
		  "oc-black-900": "#060510",
  
		  "oc-white-50": "#fefefe",
		  "oc-white-100": "#fdfdfb",
		  "oc-white-200": "#fcfcc9",
		  "oc-white-300": "#fafaf6",
		  "oc-white-400": "#f9f9f4",
		  "oc-white-500": "#f8f8f1",
		  "oc-white-600": "#e2e2db",
		  "oc-white-700": "#b0b0ab",
		  "oc-white-800": "#888885",
		  "oc-white-900": "#686865",
		  "oc-button-hover": "#FF866B",
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
  
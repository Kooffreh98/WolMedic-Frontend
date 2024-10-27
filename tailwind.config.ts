import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Colors Added
        "gray-300": "#CFCFD1", // Border gray color
        "green-700": "#69bd45", // Green used for notifications

        // Primary color (teal) for active states
        primary: {
          DEFAULT: "#2C7A7B", // Teal color used for active states
          light: "#319795", // Lighter teal for secondary elements
          dark: "#234E52", // Darker teal (if needed)
        },

        // Secondary color (gray-blue background and gray text)
        secondary: {
          DEFAULT: "#EDF2F7", // Light Gray-Blue (background color)
          dark: "#718096", // Dark Gray (text and inactive icons)
        },

        // Accent colors (red for warnings, white for content areas)
        accent: {
          red: "#F56565", // Red for buttons or warnings
          white: "#FFFFFF", // White (background and content areas)
        },

        // Additional gray shades for UI elements
        gray: {
          light: "#CBD5E0", // Light gray (for input fields, borders, etc.)
          dark: "#4A5568", // Dark gray (for text)
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Font family for sans-serif
      },
    },
  },
  plugins: [],
};

export default config;

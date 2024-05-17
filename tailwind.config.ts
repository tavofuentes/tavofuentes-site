import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eggshell: "#F0EDEC",
        black: "#1A1B25",
        forest: "#294D4A",
        night: "#161C1B",
        tangerine: "#FC814A",
        brick: "#9B1D20",
        grass: "#467E79",
        olive: "#919973",
      },
    },
  },
  plugins: [],
};
export default config;

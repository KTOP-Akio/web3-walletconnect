import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./page-sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-radial-button': 'linear-gradient(90deg, #00C4F4 0%, #040C15 49%, #00C4F4 100%)',
        'gradient-radial-section1': 'linear-gradient(180deg, rgba(2, 19, 39, 0) 0%, #021327 100%)',
        'section1-background': "url('/assets/images/section1_background.png')",
        'gradient-radial-section2': 'linear-gradient(180deg, #021327 0%, rgba(2, 19, 39, 0) 100%)',
        'section2-background': "url('/assets/images/section2_background.png')",
        'gradient-radial-filled-button': "linear-gradient(90deg, #6DDFF6 0%, #6366FF 100%)",
        'gradient-radial-whitepaper-button': "linear-gradient(90deg, #E84AD2 0%, #4B9BE0 100%)",
        'gradient-radial-tax-card1': "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(42, 43, 49, 0) 100%)",
        'gradient-radial-tax-card2': "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(42, 43, 49, 0) 100%)",
        'section5-background': "url('/assets/images/section5_background.png')",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        'buy-card': '0px 1px 1px 0px #00000040',
        'token-card': '2px 2px 8px 0px rgba(0, 0, 0, 0.30)',
        'gradient-button': '0px 10px 20px 0px #36BB9130',
        'whitepaper-button': '0px 4px 20px 0px #94E3FF42',
      },
    },
  },
  plugins: [],
};
export default config;

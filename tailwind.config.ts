import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-geist-montserrat)", "sans-serif"],
        museo: ["var(--font-geist-museo)", "sans-serif"],
      },
      colors: {
        // Các màu cũ
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        // Màu mới từ hình
        brand: {
          primary: {
            veryLight: "#E5F4FB",
            light: "#AED9EC",
            medium: "#1575B9",
            dark: "#005795",
            veryDark: "#003459",
          },
          secondary: {
            veryLight: "#FFE9BA",
            light: "#FFD782",
            medium: "#F4C65C",
            dark: "#DA9A13",
            veryDark: "#A47105",
          },
        },
        content: {
          veryLight: "#F5F5F5",
          light: "#E5E5E5",
          medium: "#A3A3A3",
          dark: "#737373",
          veryDark: "#232323",
        },
        status: {
          success: {
            veryLight: "#E6F2FC",
            light: "#96CBF1",
            medium: "#6BB5EC",
            dark: "#2B96E4",
            veryDark: "#0080DE",
          },
          warning: {
            veryLight: "#FDEAD7",
            light: "#F7B27A",
            medium: "#EF6820",
            dark: "#B34E18",
            veryDark: "#54240B",
          },
          error: {
            veryLight: "#FEE4E2",
            light: "#FDA29B",
            medium: "#F04438",
            dark: "#B42318",
            veryDark: "#7A271A",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

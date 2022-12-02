/** @type {import('tailwindcss').Config} */

function generateColors(variable) {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
}

const textColor = {
  primary: generateColors("text-primary"),
  secondary: generateColors("text-secondary"),
  tertiary: generateColors("text-tertiary"),
};

const backgroundColor = {
  primary: generateColors("bg-primary"),
  secondary: generateColors("bg-secondary"),
  tertiary: generateColors("bg-tertiary"),
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      textColor,
      backgroundColor,
    },
  },
  plugins: [],
};

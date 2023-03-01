module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        skills: 'url("/src/assets/img/outline-text/skills.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      fontFamily: {
        sans: ['"Lobster"'],
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        gradient:'linear-gradient(to right, #FFF 20%, #FF0 40%, #FF0 60%, #FFF 80%)',
        paragraph: '#878e99',
        image: 'rgba(51, 51, 51, 0.9)',
      },
      boxShadow: {
        xl : '-100px -100px 0 -90px rgb(38 39 46 / var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
};

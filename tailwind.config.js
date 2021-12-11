module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
          center: true,
          padding: '1em',
        },
    
        fontFamily: {
          sans: ['Work Sans', 'Roboto', 'sans-serif', 'ui-sans-serif', 'system-ui'],
          mulish: ['Mulish', 'Nunito', 'sans-serif', 'ui-serif', 'Georgia'],
          montserrat: ['Montserrat', 'SFMono-Regular'],
        },
    
        extend: {
          backgroundOpacity: ['active'],
    
    // "build": "vue-cli-service build",
          colors: {
            primary: '#182c47',
            secondary: '#5692e8',
            accent: '#c1d1e8',
          },
        },
      },
    plugins: [],
}  
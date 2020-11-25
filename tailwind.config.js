module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['untilities'],
    content: [
      '.public/**/*.html',
    ], 
  },
  theme: {
    extend: {
      container:{
        center: 'true',
        padding : '1rem',
      },

      colors : {
        primary : '#457b9d',
        danger : '#e63946',
      },

      animation : {
        'dropdown-transition' : 'dropdownTransition 0.4s cubic-bezier(0.73, 0.005, 0.22, 1)',
        'accordion' : 'accordion 2s'
      },

      keyframes: {

        'dropdownTransition' :{
          'from': {
            opacity: '0',
            transform: 'scale(0.98) translateY(-0.6em)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          }
        },

        'accordion' :{
          'from': {
            maxHeight: '0',
            animationTimingfunction : 'linear',
          },
          'to': {
            maxHeight: '600px',
            animationTimingfunction : 'linear',
          }
        },

      },
    },
  },
  variants: {

    display: ['responsive', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}

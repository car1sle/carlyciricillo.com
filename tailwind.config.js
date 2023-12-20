// Run node tailwind.config.js to see the console

const plugin = require('tailwindcss/plugin')
const tokens = require('./sd-tokens.js')

var sdColorTokens = {}
var sdFontFamilyTokens = {}
var sdBorderTokens = {}

const createSdTokens = (obj, tokenCategory) => {
  var currKey
  var currVal
  Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          createSdTokens(obj[key], tokenCategory)
      }
      if (typeof obj[key] === 'object' && obj[key] !== null && key === 'path') {
          let tokenKey = obj[key].slice(1)
          currKey = tokenKey.join('-')
      }
      if (typeof obj[key] === 'string' && obj[key] !== null && key === 'value') {
        currVal = obj[key]
      }
  })
  if(currKey && currVal){
    if (tokenCategory === 'color'){
      sdColorTokens[currKey] = currVal
    }
    if (tokenCategory === 'fontFamily'){
      sdFontFamilyTokens[currKey] = currVal
    }
    if (tokenCategory === 'border'){
      sdBorderTokens[currKey] = currVal
    }
  }
}

createSdTokens(tokens.color, "color")
createSdTokens(tokens.fontFamily, "fontFamily")
createSdTokens(tokens.border, "border")
console.log("color tokens:", sdColorTokens)
console.log("fontFamily tokens:", sdFontFamilyTokens)
console.log("border tokens:", sdBorderTokens)

module.exports = {
  content: [
  	'index.html',
  	'404.html',
    'index.js',
    'pages/*.html',
    'scripts/*.js',
    'scripts/**/*.js',
    'objects/*.js',
    '404.html',
  ],
  theme: {
    colors: sdColorTokens,
    fontFamily: sdFontFamilyTokens,
    borderRadius: sdBorderTokens,
    screens: {
      'xs': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '880px',
      'xl': '1024px',
    },
    // nest token objs within the extend obj to
    // add more tokens while keeping the defaults?
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'html': { 
          color: theme('colors.text-base'),
        },
        'body': { 
          backgroundColor: theme('colors.background-page'),
        },
        'nav': { 
          backgroundColor: theme('colors.background-nav'),
        },
        'main a': { 
          color: theme('colors.text-accent'),
        },
      })
    })
  ],
}
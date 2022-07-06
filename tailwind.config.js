// Run node tailwind.config.js to see the console

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
    'index.js',
    'pages/*.html',
  ],
  theme: {
    colors: sdColorTokens,
    fontFamily: sdFontFamilyTokens,
    borderRadius: sdBorderTokens,
    // nest token objs within the extend obj to
    // add more colors while keeping the defaults
    extend: {},
  },
  plugins: [],
}
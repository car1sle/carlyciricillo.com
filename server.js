var express = require('express')
var app = express()
var fetch = require('isomorphic-fetch')
var creds = require('./creds')['production']
var fs = require('fs')

app.listen(3001, console.log("I'm a server listening on port 3001"))

const FigmaAPIKey = creds.FigmaAPIKey
const FigmaFileID = creds.FigmaFileID

async function figmaFileFetch(fileId) {
    let result = await fetch('https://api.figma.com/v1/files/' + fileId , {
        method: 'GET',
        headers: {
            'X-Figma-Token': FigmaAPIKey
        }
    })

    let figmaFileStruct = await result.json()

    let figmaTokens = []
    let tokenNames = []
    let tokenValues = []
    let tokensObj = {}
    let tokensArray = []
    let tokensMegaObj = {}
    
    // For each page of Figma tokens, add a new push with the page name as the second argument
    // Create an array of objects where each object is a Token layer from the Tokens frame in Figma
    figmaTokens.push(tokensFromPage(figmaFileStruct, 'Type'))
    figmaTokens.push(tokensFromPage(figmaFileStruct, 'Color'))
    figmaTokens.push(tokensFromPage(figmaFileStruct, 'Border'))

    // In Figma, each token group has 4 layers: Token Name, Raw Value, Value & Example
    // Push up Token Names & Values
    figmaTokens.forEach(function(tokenLayer){
        tokenLayer.forEach(function(innerTokenLayer){
            tokenNames.push(innerTokenLayer[3].characters)
            tokenValues.push(innerTokenLayer[1].characters)
        })
    })

    // Fill tokensObj with key:value tokens
    tokenNames.forEach((element, index) => {
        tokensObj[element] = tokenValues[index]
    })

    // Transform dot notation token names into nested objects
    // Push to tokensArray
    for (const property in tokensObj) {
        let name = property
        let value = tokensObj[property]
        tempObject = {}
        let container = tempObject
        name.split('.').map((k, i, values) => {
            container = (container[k] = (i == values.length - 1 ? value : {}))
        })
        tokensArray.push(tempObject)
    }

    // Use merge function on nested token objects
    tokensArray.forEach(token => {
        [tokensMegaObj, tokensMegaObj, token].reduce(merge)
    })

    // Create 'value' keys for Style Dictionary
    iterate(tokensMegaObj)

    return tokensMegaObj
}

// Write tokensMegaObj in tokens.json
app.use('/', async function (req, res, next) {
    let result = await figmaFileFetch(FigmaFileID).catch(error => console.log(error))
    fs.writeFileSync("tokens.json", JSON.stringify(result))
    res.send(JSON.stringify(result))
})

// Merge nested objects
// stackoverflow.com/questions/56256758/how-to-merge-nested-objects-in-javascript
function merge(a, b) {
    return Object.entries(b).reduce((o, [k, v]) => {
        o[k] = v && typeof v === 'object'
            ? merge(o[k] = o[k] || (Array.isArray(v) ? [] : {}), v)
            : v
        return o
    }, a)
}

// If value of a key is a string, make the value an object with one key value pair
// where the key is 'value' and the value is the string
const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
                iterate(obj[key])
        }
        if (key !== null && obj[key] !== null && typeof obj[key] === 'string') {
            obj[key] = {'value': obj[key]}
        }
    })
}

function tokensFromPage(figmaFileStruct, pageName){

    return figmaFileStruct.document.children
    .filter(child => child.type === 'CANVAS' && child.name === pageName)[0].children
    .filter(child => child.type === 'FRAME' && child.name === 'Tokens')[0].children
    .filter(child => child.type === 'GROUP' && child.name === 'Token')
    .map(group => {
        return {
            children: group.children
        }
    })
    .map(tokens => tokens.children)
    
}
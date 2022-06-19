# carlyciricillo.com

1) To grab the file from the Figma API, running npm start and pull up localhost:3001

2) In new tab run style-dictionary build, which builds the Style Dictionary tokens in sd-tokens.js. This builds them in the javascript/module format, exposing a CommonJS module to work with Tailwind's configuration

3) Run npx tailwindcss -i input.css -o output.css --watch to: 1) build index.html and have styles reflected in ouput.css and 2) integrate the sd-tokens with Tailwind (output.css)


Style Dictionary token tree: https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item
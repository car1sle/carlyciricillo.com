# carlyciricillo.com

1) To grab the file from the Figma API, running npm start and pull up localhost:3001

2) In new tab run style-dictionary build, which builds the Style Dictionary tokens in sd-tokens.js. This builds them in the javascript/module format, exposing a CommonJS module to work with Tailwind's configuration

3) Run npx tailwindcss -i css/input.css -o css/output.css --watch to: 1) scan designated files for classes and build styles in ouput.css and 2) integrate the sd-tokens with Tailwind (output.css)

4) To check Tailwind version, run npm info tailwindcss version

To dos:\
Firefox tests\
Resize width of max scroll area in skills caorusel when resizing browser/device width\
Dark mode - Tailwind documentation; https://stackoverflow.com/questions/59233531/safari-favicon-incorrectly-rendering-with-white-background \
Bring tap highlight color in from Tailwind https://github.com/tailwindlabs/tailwindcss/discussions/2984
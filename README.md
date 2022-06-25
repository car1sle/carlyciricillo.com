# carlyciricillo.com

1) To grab the file from the Figma API, running npm start and pull up localhost:3001

2) In new tab run style-dictionary build, which builds the Style Dictionary tokens in sd-tokens.js. This builds them in the javascript/module format, exposing a CommonJS module to work with Tailwind's configuration

3) Run npx tailwindcss -i css/input.css -o css/output.css --watch to: 1) build index.html and have styles reflected in ouput.css and 2) integrate the sd-tokens with Tailwind (output.css)

To dos:
move JS into a scripts folder
try out live server exension

mobile nav updates:
Change carat to UP when desktop/mobile menus are expanded
Hide mobile menu when clicking elsewhere on page
Hide mobile menu on larger screens (using sm:hidden , it will come back when the screen is resized back to mobile again)
change nav links to lis
# carlyciricillo.com

1) To grab the file from the Figma API, running npm start and pull up localhost:3001

2) In new tab run style-dictionary build, which builds the Style Dictionary tokens in sd-tokens.js. This builds them in the javascript/module format, exposing a CommonJS module to work with Tailwind's configuration

3) Run npx tailwindcss -i css/input.css -o css/output.css --watch to: 1) scan HTML files for classes and build styles in ouput.css and 2) integrate the sd-tokens with Tailwind (output.css)

4) To check Tailwind version, run npm info tailwindcss version

To dos:

Mobile pressed no effect https://github.com/tailwindlabs/tailwindcss/discussions/1739\
Test on Firefox\
Keyboard accessibility\
when closing out of hamburger, collapse development dropdown\
revisit canva color theory & add to colors documentation\

Future imporvements:\
Dark mode\
Inclusive hiding\
Move JS into a scripts folder
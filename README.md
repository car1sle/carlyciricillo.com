# carlyciricillo.com

1) To grab the file from the Figma API, running npm start and pull up localhost:3001

2) In new tab run style-dictionary build, which builds the Style Dictionary tokens in sd-tokens.js. This builds them in the javascript/module format, exposing a CommonJS module to work with Tailwind's configuration

3) Run npx tailwindcss -i css/input.css -o css/output.css --watch to: 1) scan designated files for classes and build styles in ouput.css and 2) integrate the sd-tokens with Tailwind (output.css)

4) To check Tailwind version, run npm info tailwindcss version

To dos:\
Test on Firefox\
About me shouldn't be the homepage?\
Sitemap (site crawlers out that there that generate a sitemap for you, then you can just upload)\

Future imporvements:\
Dark mode\
Change favicon for dark vs light mode? (https://stackoverflow.com/questions/59233531/safari-favicon-incorrectly-rendering-with-white-background // look @ tailwind dark mode documentation)\
Keyboard accessibility\
Inclusive hiding\
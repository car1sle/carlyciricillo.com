'use strict';

const EmailDisplay = ({ h1, src1, src2, title1, title2 }) => {

  return (
    <>
      <button type="button"></button>
      <div>
        <h1 class="mb-2 font-bold text-lg">{h1}</h1>
        <p class="mb-5 leading-7">This mobile-first, live-text Sonos campaign lets you know when items you viewed are back in stock. Dark mode media queries create a seamless inverted experience in open environments that support it.</p>
        <div class="relative w-full overflow-hidden pt-[166.66%] mb-5">
          <iframe
              src={src1}
              title={title1}
              name={title1}
              class="absolute inset-x-0 inset-y-0 w-full h-full"
          ></iframe>
        </div>
        <p class="mb-5 leading-7">One HTML template programmatically adapts to each unique customer. The variation above shows four products that came back in stock, while the variation below spotlights a single carted item at full width. Additionally, Salesforce AMPscript &#40;left unrendered for preview purposes&#41; toggles which Upgrade module will display. Find out how these triggered emails impact Sonos' bottom line in <a href="https://www.wunderkind.co/resources/case-studies/sonos/" target="_blank">the case study</a>.</p>
        <div class="relative w-full overflow-hidden pt-[166.66%] mb-5">
          <iframe
              src={src2}
              title={title2}
              name={title2}
              class="absolute inset-x-0 inset-y-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );

}

const root = ReactDOM.createRoot(document.getElementById('email-display-container'));
root.render(React.createElement(EmailDisplay, {
  h1: 'Sonos',
  title1: 'Sonos-Back-In-Stock',
  src1: '../html-emails/Sonos_BackInStock_September2022.html',
  p1: '',
  title2: 'Sonos-Cart-Abandon',
  src2: '../html-emails/Sonos_CartAbandon_January2023.html',
  p2: '',
}));
'use strict';

const EmailDisplay = () => {

  return (
    <>
      <h1 class="text-text-base mb-2 font-bold text-lg">Sonos</h1>
      <p class="text-text-base mb-5 leading-7">This mobile-first, live-text Sonos campaign lets you know when items you viewed are back in stock. Dark mode media queries create a seamless inverted experience in open environments that support it. Toggle your device to dark mode to check it&nbsp;out!</p>
      <iframe
          src="../html-emails/Sonos_BackInStock_September2022.html"
          title="Sonos-Back-In-Stock-Email"
          name="Sonos-Back-In-Stock-Email"
          height="1000"
          width="650"
          class="block my-0 mx-auto mb-5"
      ></iframe>
      <p class="text-text-base mb-5 leading-7">To help scale my company's partnership with Sonos, I built the above email template to adapt to each unique customer. Let's say the variation above highlights four products that just came back in stock, and the variation below shows a single item that the user carted without checking out. One HTML template programmatically changes its layout to spotlight the single item, full width. Additionally, Salesforce AMPscript &#40;left unrendered for preview purposes&#41; toggles which Upgrade module will display. How did these triggered emails impact Sonos' bottom line? Find out in <a href="https://www.wunderkind.co/resources/case-studies/sonos/" target="_blank" class="text-text-accent">the case study</a>!</p>
      <iframe
          src="../html-emails/Sonos_CartAbandon_January2023.html"
          title="Sonos-Back-In-Stock-Email"
          name="Sonos-Back-In-Stock-Email"
          height="1000"
          width="650"
          class="block my-0 mx-auto mb-5"
      ></iframe>
    </>
  );

}

const root = ReactDOM.createRoot(document.getElementById('email-display-container'));
root.render(React.createElement(EmailDisplay));
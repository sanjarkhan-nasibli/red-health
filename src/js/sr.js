import assignProps from "./assignProps";

export default function initSr() {
  const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  };

  ScrollReveal().reveal(
    ".section-title",
    assignProps(
      {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".button-more-div",
    assignProps(
      {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".section-title-reach",
    assignProps(
      {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".section-title-health",
    assignProps(
      {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".section-title-who",
    assignProps(
      {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    "#h1-title",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".footer-logo",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".hero-title",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".card",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".blood-drop-svgrepo-com-1-icon",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "right" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".here-you-can-find-test-centers",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".col-xs-4.col-sm-4.col-md-4",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".hero-cta",
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".about-wrapper__image",
    assignProps(
      {
        delay: 600,
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".about-wrapper__info",
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".project-wrapper__text",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".project-wrapper__image",
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? "right" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".contact-wrapper",
    assignProps(
      {
        delay: 800,
        origin: "bottom",
      },
      defaultProps
    )
  );
}

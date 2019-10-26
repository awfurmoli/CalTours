import React from "react";

class Stories extends React.Component {
  render() {
    return (
      <>
        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="img/video.mp4" type="video/mp4" />
              <source src="img/video.webm" type="video/webm" />
              Your browser is not supported!
            </video>
          </div>

          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="img/nat-8.jpg"
                  className="story__img"
                  alt="person on a tour"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week with my family
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                  tempora repellat commodi, neque cum quos amet quod
                  blanditiisQui tempora repellat commodi, neque cum quos amet
                  quod blanditiis
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="img/nat-9.jpg"
                  className="story__img"
                  alt="person on a tour"
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  wow! my life is completly different now
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                  tempora repellat commodi, neque cum quos amet quod
                  blanditiisQui tempora repellat commodi, neque cum quos amet
                  quod blanditiis
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn-text">
              Read all stories&rarr;
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default Stories;

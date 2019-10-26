import React from "react";

class Features extends React.Component {
  render() {
    return (
      <>
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-world feature-box__icon"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sapiente odit accusamus ratione officia reprehenderit
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-compass feature-box__icon"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet the nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sapiente odit accusamus ratione officia reprehenderit
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-map feature-box__icon"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sapiente odit accusamus ratione officia reprehenderit
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-heart feature-box__icon"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  live a helthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sapiente odit accusamus ratione officia reprehenderit
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Features;

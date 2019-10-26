import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                fugit delectus unde quia dicta numquam corporis, perspiciatis
                distinctio perferendis ad rerum, praesentium nisi porro! At
                atque quisquam beatae sint qui!
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Love adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                fugit delectus unde quia dicta numquam corporis, perspiciatis
                distinctio perferendis ad rerum, praesentium nisi porro! At
                atque quisquam beatae sint qui!
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composation">
                <img
                  src="img/nat-1-large.jpg"
                  alt="photo 1"
                  className="composation__photo composation__photo--p1"
                />
                <img
                  src="img/nat-2-large.jpg"
                  alt="photo 2"
                  className="composation__photo composation__photo--p2"
                />
                <img
                  src="img/nat-3-large.jpg"
                  alt="photo 3"
                  className="composation__photo composation__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

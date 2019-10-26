import React from "react";

class Books extends React.Component {
  render() {
    return (
      <>
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className=" u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start Booking Now</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                      autocomplete="off"
                    />
                    <label for="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email Adderess"
                      id="email"
                      required
                      autocomplete="off"
                    />
                    <label for="email" className="form__label">
                      Email Address
                    </label>
                  </div>

                  <div className="form__group">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        id="small"
                        name="size"
                        className="form__radio-input"
                      />
                      <label for="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        id="large"
                        name="size"
                        className="form__radio-input"
                      />
                      <label for="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div className="form__group u-margin-top-medium">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Books;

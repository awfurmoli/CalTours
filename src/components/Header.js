import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header__logo-box">
            <img src="img/logo-white.png" alt="logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">OUTDOORS</span>
              <span className="heading-primary--sub">
                IS WHERE LIFE HAPPENS
              </span>
            </h1>

            <a href="#" className="btn btn--white btn--animated">
              Discover our tours
            </a>
          </div>
        </header>
      </>
    );
  }
}

export default Header;

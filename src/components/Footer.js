import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer__logo-box">
            <img
              src="img/logo-green-2x.png"
              alt="full logo"
              className="footer__logo"
            />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Careers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by
                <a
                  href="http://www.linkedin.com/in/ahmadw-furmoli"
                  target="_blank"
                  className="footer__link"
                >
                  Ahmad Furmoli
                </a>
                part of his Advanced CSS Projects.Copyright &copy 2019;
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

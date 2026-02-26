export default function AboutBestLocationsView() {
  return (
    <div className="best-locations">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading text-center">
              <h2>Best Locations In Caribbeans</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="options">
              {/* Note: CSS Variables in style must be written as strings in an object */}
              <div
                className="option active"
                style={{
                  "--optionBackground":
                    "url(https://buttoncreatives.com/html/woox/assets/images/best-01.jpg)",
                }}
              >
                <div className="shadow"></div>
                <div className="label">
                  <div className="icon">
                    <i className="fas fa-expand"></i>
                  </div>
                  <div className="info">
                    <div className="main">Havana</div>
                    <div className="sub">Population: 2M</div>
                  </div>
                </div>
              </div>

              <div
                className="option"
                style={{
                  "--optionBackground":
                    "url(https://buttoncreatives.com/html/woox/assets/images/best-02.jpg)",
                }}
              >
                <div className="shadow"></div>
                <div className="label">
                  <div className="icon">
                    <i className="fas fa-expand"></i>
                  </div>
                  <div className="info">
                    <div className="main">Kingston</div>
                    <div className="sub">Population: 3.5M</div>
                  </div>
                </div>
              </div>

              <div
                className="option"
                style={{
                  "--optionBackground":
                    "url(https://buttoncreatives.com/html/woox/assets/images/best-03.jpg)",
                }}
              >
                <div className="shadow"></div>
                <div className="label">
                  <div className="icon">
                    <i className="fas fa-expand"></i>
                  </div>
                  <div className="info">
                    <div className="main">London</div>
                    <div className="sub">Population: 4.1M</div>
                  </div>
                </div>
              </div>

              <div
                className="option"
                style={{
                  "--optionBackground":
                    "url(https://buttoncreatives.com/html/woox/assets/images/best-04.jpg)",
                }}
              >
                <div className="shadow"></div>
                <div className="label">
                  <div className="icon">
                    <i className="fas fa-expand"></i>
                  </div>
                  <div className="info">
                    <div className="main">Pristina</div>
                    <div className="sub">Population: 520K</div>
                  </div>
                </div>
              </div>

              <div
                className="option"
                style={{
                  "--optionBackground":
                    "url(https://buttoncreatives.com/html/woox/assets/images/best-05.jpg)",
                }}
              >
                <div className="shadow"></div>
                <div className="label">
                  <div className="icon">
                    <i className="fas fa-expand"></i>
                  </div>
                  <div className="info">
                    <div className="main">Paris</div>
                    <div className="sub">Population: 3M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="main-button text-center">
              <a href="deals.html">Discover All Places</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

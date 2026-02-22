export default function HeaderView() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="src/assets/images/logo.png" alt="" />
              </a>
              <ul className="nav">
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="deals.html">Deals</a>
                </li>
                <li>
                  <a href="reservation.html">Reservation</a>
                </li>
                <li>
                  <a href="reservation.html">Book Yours</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

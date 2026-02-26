import { NavLink } from "react-router-dom";

export default function HeaderView() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo Link */}
              <NavLink to="/" className="logo">
                <img src="src/assets/images/logo.png" alt="" />
              </NavLink>

              <ul className="nav">
                <li>
                  {/* 'end' ensures Home isn't highlighted when you are on /about */}
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/deals">Deals</NavLink>
                </li>
                <li>
                  <NavLink to="/reservation">Reservation</NavLink>
                </li>
                <li>
                  <NavLink to="/book">Book Yours</NavLink>
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

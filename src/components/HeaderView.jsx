export default function HeaderView() {
  return (
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="index.html" class="logo">
                <img src="src/assets/images/logo.png" alt="" />
              </a>
              <ul class="nav">
                <li>
                  <a href="index.html" class="active">
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
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

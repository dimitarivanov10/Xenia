import { useState } from "react";
import LoadingView from "./components/LoadingView.jsx";

import FooterView from "./components/FooterView.jsx";
import HomeView from "./views/HomeView.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}
      <HomeView />
      <FooterView />
    </main>
  );
}

export default App;

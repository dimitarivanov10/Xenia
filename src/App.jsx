import { useState } from "react";
import LoadingView from "./components/LoadingView.jsx";
import HeaderView from "./components/HeaderView.jsx";
import FooterView from "./components/FooterView.jsx";
import HomeView from "./views/HomeView.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}
      <HeaderView />

      <HomeView />
      <FooterView />
    </main>
  );
}

export default App;

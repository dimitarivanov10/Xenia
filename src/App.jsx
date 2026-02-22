import { useState } from "react";
import HeaderView from "./components/HeaderView.jsx";
import LoadingView from "./components/LoadingView.jsx";
import MainBannerView from "./components/MainBannerView.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}

      <HeaderView />

      <MainBannerView />
    </main>
  );
}

export default App;

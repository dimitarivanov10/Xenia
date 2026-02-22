import { useState } from "react";
import HeaderView from "./components/HeaderView.jsx";
import LoadingView from "./components/LoadingView.jsx";
import MainBannerView from "./components/MainBannerView.jsx";
import VisitCountryView from "./components/VisitCountryView.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}

      <HeaderView />

      <MainBannerView />
      <VisitCountryView />
    </main>
  );
}

export default App;

import { useState } from "react";
import HeaderView from "./components/HeaderView.jsx";
import LoadingView from "./components/LoadingView.jsx";
import MainBannerView from "./components/MainBannerView.jsx";
import VisitCountryView from "./components/VisitCountryView.jsx";
import CallToAction from "./components/CalltoAction.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}

      <HeaderView />

      <MainBannerView />
      <VisitCountryView />
      <CallToAction />
    </main>
  );
}

export default App;

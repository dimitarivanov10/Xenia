import { useState } from "react";
import HeaderView from "./components/HeaderView.jsx";
import LoadingView from "./components/LoadingView.jsx";
import MainBannerView from "./components/MainBannerView.jsx";
import VisitCountryView from "./components/VisitCountryView.jsx";
import CallToActionView from "./components/CalltoActionView.jsx";
import FooterView from "./components/FooterView.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}

      <HeaderView />

      <MainBannerView />
      <VisitCountryView />
      <CallToActionView />
      <FooterView />
    </main>
  );
}

export default App;

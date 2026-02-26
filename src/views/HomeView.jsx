import { useState } from "react";
import MainBannerView from "../components/MainBannerView.jsx";
import VisitCountryView from "../components/VisitCountryView.jsx";
import CallToActionView from "../components/CalltoActionView.jsx";

export default function HomeView() {
  return (
    <main>

      <MainBannerView />
      <VisitCountryView />
      <CallToActionView />
    </main>
  );
}

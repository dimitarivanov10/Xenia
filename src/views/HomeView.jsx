import { useState } from "react";
import MainBannerView from "../components/MainBannerView.jsx";
import VisitCountryView from "../components/VisitCountryView.jsx";

export default function HomeView() {
  return (
    <main>

      <MainBannerView />
      <VisitCountryView />
    </main>
  );
}

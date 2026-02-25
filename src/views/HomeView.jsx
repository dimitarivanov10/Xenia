import { useState } from "react";
import MainBannerView from "../components/MainBannerView.jsx";
import VisitCountryView from "../components/VisitCountryView.jsx";
import CallToActionView from "../components/CalltoActionView.jsx";
import HeaderView from "../components/HeaderView.jsx";

export default function HomeView() {
  return (
    <main>
      <HeaderView />

      <MainBannerView />
      <VisitCountryView />
      <CallToActionView />
    </main>
  );
}

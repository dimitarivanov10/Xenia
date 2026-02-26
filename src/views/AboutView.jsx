import AboutCityView from "../components/AboutCityView.jsx";
import AboutMainBannerView from "../components/AboutMainBannerView.jsx";
import AboutWeeklyOffers from "../components/AboutWeeklyOffers.jsx";
import {useState} from "react";
import AboutMoreView from "../components/AboutMoreView.jsx";
import AboutBestLocationsView from "../components/AboutBestLocationsView.jsx";

export default function AboutView(){
    return(
        <main>
            <AboutMainBannerView />
            <AboutCityView />
            <AboutWeeklyOffers />
            <AboutMoreView />
            <AboutBestLocationsView />
        </main>
    )
}
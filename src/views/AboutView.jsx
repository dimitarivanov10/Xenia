import AboutCityView from "../components/AboutCitiesView.jsx";
import AboutMainBannerView from "../components/AboutMainBannerView.jsx";
import AboutWeeklyOffers from "../components/AboutWeeklyOffers.jsx";
import {useState} from React;
import AboutMoreView from "../components/AboutMoreView.jsx";

export default function AboutView(){
    return(
        <main>
            <AboutMainBannerView />
            <AboutCityView />
            <AboutWeeklyOffers />
            <AboutMoreView />
        </main>
    )
}
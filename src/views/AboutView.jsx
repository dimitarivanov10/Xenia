import AboutCityView from "../components/AboutCitiesView.jsx";
import AboutMainBannerView from "../components/AboutMainBannerView.jsx";
import AboutWeeklyOffers from "../components/AboutWeeklyOffers.jsx";
import {useState} from React;

export default function AboutView(){
    return(
        <main>
            <AboutMainBannerView />
            <AboutCityView />
            <AboutWeeklyOffers />
        </main>
    )
}
import AboutCityView from "../components/AboutCitiesView.jsx";
import AboutMainBannerView from "../components/AboutMainBannerView.jsx";
import {useState} from React;

export default function AboutView(){
    return(
        <main>
            <AboutMainBannerView />
            <AboutCityView />
            
        </main>
    )
}
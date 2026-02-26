import { useState } from "react";
import LoadingView from "./components/LoadingView.jsx";
import HeaderView from "./components/HeaderView.jsx";
import FooterView from "./components/FooterView.jsx";
import HomeView from "./views/HomeView.jsx";
import CallToActionView from "./components/CalltoActionView.jsx";

function App() {
  return (
    <main>
      {/* <LoadingView /> */}
      <HeaderView />

      <HomeView />
      <CallToActionView />
      <FooterView />
    </main>
  );
}

export default App;

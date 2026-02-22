import { useState } from "react";
import HeaderView from "./components/HeaderView.jsx";
import LoadingView from "./components/LoadingView.jsx";

function App() {
  return (
    <main>
      <LoadingView />

      <HeaderView />
    </main>
  );
}

export default App;

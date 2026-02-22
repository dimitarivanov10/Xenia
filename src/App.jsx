import { useState } from "react";
import { HeaderView } from "./components/HeaderView.jsx";

function App() {
  return (
    <main>
      <LoadingView />

      <HeaderView />
    </main>
  );
}

import DealsAmazingDealsView from "../components/DealsAmazinDealsView.jsx";
import DealsPageHeadingView from "../components/DealsPageHeadingView.jsx";
import DealsSearchFormView from "../components/DealsSearchFormView.jsx";

export default function DealsView() {
  return (
    <main>
      <DealsPageHeadingView />
      <DealsSearchFormView />
      <DealsAmazingDealsView />
    </main>
  );
}

import ReservationFormView from "../components/ReservationFormView.jsx";
import ReservationMoreInfoView from "../components/ReservationMoreInfoView.jsx";
import ReservationSecondPageHeadingView from "../components/ReservationSecondPageHeadingView.jsx";

export default function ReservationView() {
  return (
    <main>
      <ReservationSecondPageHeadingView />
      <ReservationMoreInfoView />
      <ReservationFormView />
    </main>
  );
}

import { ReservationTotalProvider } from "../../contexts/ReservationTotal.context";
import { SelectedDatesProvider } from "../../contexts/SelectedDates.context";
import { SelectedOptionsProvider } from "../../contexts/SelectedOption.context";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder, isSticky = true }) => {
  return (
    <SelectedDatesProvider>
      <SelectedOptionsProvider>
        <ReservationTotalProvider>
          <Header placeholder={placeholder} isSticky={isSticky} />
          <main>{children}</main>
          <Footer />
        </ReservationTotalProvider>
      </SelectedOptionsProvider>
    </SelectedDatesProvider>
  );
};

export default Layout;

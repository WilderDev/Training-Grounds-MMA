import { ExtraDetailsProvider } from "../../contexts/ExtraDetails.context";
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
          <ExtraDetailsProvider>
            <Header placeholder={placeholder} isSticky={isSticky} />
            <main>{children}</main>
            <Footer />
          </ExtraDetailsProvider>
        </ReservationTotalProvider>
      </SelectedOptionsProvider>
    </SelectedDatesProvider>
  );
};

export default Layout;

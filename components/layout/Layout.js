import { ExtraDetailsProvider } from "../../contexts/ExtraDetails.context";
import { GymFiltersProvider } from "../../contexts/GymFilters.context";
import { LocationProvider } from "../../contexts/Location.context";
import { ReservationTotalProvider } from "../../contexts/ReservationTotal.context";
import { SelectedDatesProvider } from "../../contexts/SelectedDates.context";
import { SelectedOptionsProvider } from "../../contexts/SelectedOption.context";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder, isSticky = true }) => {
  return (
    <LocationProvider>
      <SelectedDatesProvider>
        <SelectedOptionsProvider>
          <ReservationTotalProvider>
            <GymFiltersProvider>
              <ExtraDetailsProvider>
                <Header placeholder={placeholder} isSticky={isSticky} />
                <main>{children}</main>
                <Footer />
              </ExtraDetailsProvider>
            </GymFiltersProvider>
          </ReservationTotalProvider>
        </SelectedOptionsProvider>
      </SelectedDatesProvider>
    </LocationProvider>
  );
};

export default Layout;

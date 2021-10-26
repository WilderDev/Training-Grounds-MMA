import { SelectedOptionsProvider } from "../../contexts/SelectedOption.context";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder, isSticky = true }) => {
  return (
    <SelectedOptionsProvider>
      <Header placeholder={placeholder} isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </SelectedOptionsProvider>
  );
};

export default Layout;

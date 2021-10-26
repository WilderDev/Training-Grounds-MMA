import { SelectedOptionProvider } from "../../contexts/SelectedOption.context";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder, isSticky = true }) => {
  return (
    <SelectedOptionProvider>
      <Header placeholder={placeholder} isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </SelectedOptionProvider>
  );
};

export default Layout;

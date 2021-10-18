import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder, isSticky }) => {
  return (
    <>
      <Header placeholder={placeholder} isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

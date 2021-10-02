import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, placeholder }) => {
  return (
    <>
      <Header placeholder={placeholder} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

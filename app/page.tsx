import About from "./About/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Main from "./Main/page";
import Navbar from "./Navbar/page";
import Pricelist from "./Pricelist/page";
import Services from "./Services/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Main/>
      <About/>
      <Contact/>
      <Services/>
      <Pricelist/>
      <Footer/>
    </div>
  );
}

import { useEffect } from "react";
import BackToTop from "./components/common/BackToTop";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import DetailSaleToken from "./components/DetailSaleToken";
import DexoExchangeUnique from "./components/DexoExchangeUnique";
import Hero from "./components/Hero";
import JoinDexoCommunity from "./components/JoinDexoCommunity";
import OurTeam from "./components/OurTeam";
import Roadmap from "./components/Roadmap";
import Token from "./components/Token";
import WhitePaper from "./components/WhitePaper";
import WhyChooseDexo from "./components/WhyChooseDexo";

function App() {
  useEffect(() => {
    // document.cookie = "username=John Doe";
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <DexoExchangeUnique />
      <WhyChooseDexo />
      <Token />
      <DetailSaleToken />
      <Roadmap />
      <WhitePaper />
      <OurTeam />
      <JoinDexoCommunity />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

import Header from "./components/header"
import HeroSection from "./components/HeroSection";
import FeaturedBike from "./components/FeaturedBike";
import BlockSText from "./components/blockSText";
import AnyVopros from "./components/AnyVopros";
import Podval from "./components/Podval";

import HeroSectionTwo from "./components/HeroSectionTwo";
import FeaturedBikeTwoV from "./components/FeaturedBikeTwoV";
import Kataloge from "./components/Kataloge";
import ChistoText from "./components/ChistoText";

import './style/App.css';
import './fonts/style.css'

function App() {
  return (
    <>
      {/* <Header/>
      <HeroSection/>
      <FeaturedBike/>
      <BlockSText/>
      <AnyVopros/>
      <Podval/> */}



      <Header/>
      <HeroSectionTwo/>
      <FeaturedBikeTwoV/>
      <Kataloge/>
      <ChistoText/>
    </>
  );
}

export default App;

import Header from "./components/header"
import HeroSection from "./components/HeroSection";
import FeaturedBike from "./components/FeaturedBike";
import BlockSText from "./components/blockSText";
import AnyVopros from "./components/AnyVopros";
import Podval from "./components/Podval";
import './style/App.css';
import './fonts/style.css'

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <FeaturedBike/>
      <BlockSText/>
      <AnyVopros/>
      <Podval/>
    </>
  );
}

export default App;

import heroSliderData from "../assets/fake-data/hero-slider";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Hero slider */}
      <HeroSlider data={heroSliderData} control={true}/>
      {/*  end hero slider */}
    </Helmet>
  );
};

export default Home;

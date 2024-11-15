
import dynamic from "next/dynamic";
import AppData from "@data/app.json";
import Products from '@data/products';
import HeroSection from "@components/sections/Hero";
import AboutSection from "@components/sections/About";
import FeaturesOneSection from "@components/sections/Features";
import CallToActionSection from "@components/sections/CallToAction";

const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "Nonso_kitchen",
	},
  description: AppData.settings.siteDescription,
}

const Home1 = () => {
  return (
    <>
      <HeroSection type={2} />
      <ProductsSlider items={Products.collection['popular']} slidesPerView={3} />
      <FeaturesOneSection />
      <AboutSection />
      <TestimonialSlider />
      <CallToActionSection />
    </>
  );
}
export default Home1;
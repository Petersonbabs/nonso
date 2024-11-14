import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import HeroSection from "@components/sections/Hero";
import AboutTwoSection from "@components/sections/AboutTwo";
import FeaturesOneSection from "@components/sections/Features";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import CallToActionSection from "../_components/sections/CallToAction";
import CallToActionThreeSection from "../_components/sections/CallToActionThree";

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
      {/* <AboutTwoSection /> */}
      <TestimonialSlider />
      <CallToActionTwoSection />
    </>
  );
};
export default Home1;
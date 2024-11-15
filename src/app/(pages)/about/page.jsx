import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/about";
import FeaturesOneSection from "@/src/app/_components/sections/Features";
import PromoVideoSection from "@components/sections/PromoVideo";
import TeamSection from "@components/sections/Team";
import CallToActionSection from "@components/sections/CallToAction";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "About",
	},
  description: AppData.settings.siteDescription,
}

const About1 = () => {
  return (
    <>
      <PageBanner pageTitle={"About us."} breadTitle={"About us"} type={1} />
      <AboutSection />
      <FeaturesOneSection />
      <PromoVideoSection />
      <TeamSection />
      <TestimonialSlider />
      <CallToActionSection />
    </>
  );
}
export default About1;
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { bgSimplifySectionDesktop, bgSimplifySectionTablet } from "@/assets";
import LandingPage from "./Components/LandingPage";
import FeaturesPage from "./Components/FeaturesPage";
import Testimonials from "./Components/Testimonials";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen w-screen overflow-y-scroll overflow-x-hidden relative">
      <Image
        src={bgSimplifySectionTablet}
        className=" absolute -top-20 -right-10 -z-10 "
        alt="bgDeskPattern"
      />
      <Navbar />
      <LandingPage />
      <FeaturesPage />
      <Testimonials />
      <Banner />
      <Footer />
      <div className=" bg-neutral-veryDarkBlue flex flex-col items-center justify-center gap-3 text-white border-1 border-white/30 py-4">
       <p> Challenge by <Link href={"https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5"} target="blank">Frontend Mentor</Link></p>
        v06.12.2024
      </div>
    </div>
  );
}

import Hero from "@/components/Home/Hero";
import Feature from "../components/Home/Feature";
import { Newsletter } from "../components/Home/Newsletter";
import Testimonial from "@/components/Home/Testimonial";
import { Timeline } from "../components/Home/Timeline";
import { Faq } from "@/components/ui/Faq";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-4">
      <div className="flex-grow mt-[100px] md:mt-[150px]">
        <Hero />
      </div>
      <Feature />
      <Testimonial />
      <Timeline />
      <Faq />
      <Newsletter />
    </div>
  );
}

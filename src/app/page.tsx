import Hero from "./hero/page";
import Services from "./service/page";
import Booking from "./booking/page";
import FullWidthTestimonials from "./test/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services/>
      <Booking />
      <FullWidthTestimonials />
    </div>
  );
}

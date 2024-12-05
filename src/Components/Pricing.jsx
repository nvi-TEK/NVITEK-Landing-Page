import Section from "./Section";
import Heading from "./Heading";
import ContactUs from "./ContactUs";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing" crosses>
      <div className="container relative z-2">
        <Heading
          tag="contact us"
          title="Get in touch with us"/>

        <div className="relative">
          <ContactUs />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

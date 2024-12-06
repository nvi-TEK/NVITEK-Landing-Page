import Section from "./Section";
import Heading from "./Heading";
import TagLine from "./Tagline";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="services" crosses>
      <div className="container">
        <Heading
          title="Solutions Tailored for your Business"
          text="nvi-TEK provides your business with confidence to elevate client satisfaction."
          tag="services"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="object-cover w-full h-full md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
               {/* <div className="p-6 code-editor-mockup">
                <div className="flex mb-4 space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="overflow-x-auto font-mono text-sm text-white">
                
                  </pre>
                  </div> */}
            </div>
        

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="mb-4 h4">Software Development</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Solutions that streamline repetitive tasks and enhance workflow.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute border left-4 right-4 bottom-4 border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2">Transforming Ideas into Digital Reality</Generating>
          </div>

          <div className="relative grid gap-5 z-1 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="object-cover w-full h-full"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="mb-4 h4">IT Consulting</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                From strengthening your <span className="font-bold">Cybersecurity</span> framework to unlocking insights with advanced <span className="font-bold">Data Analytics</span>. Leverage on strategic guidance from our team of experts.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="mb-4 h4">Web & Mobile App Design</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Crafting unique and user-friendly interfaces that captivate your customers and drive engagement.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="object-cover w-full h-full"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

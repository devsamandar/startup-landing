import React from "react";
import Title from "../../components/Title";

function Feature() {
  return (
    <section className="xl:py-24 py-16 overflow-x-hidden" id="feature">
      <div className="container">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <Title
                title="Feature"
                titleStyle="bg-red-500/10 text-red-600"
                page="Automate everything"
                text={`You don't need to manully follow up with your visitors. The Prompt takes care of it and follow up automatically with them to understand their needs`}
              />
              <button className="mt-12 flex items-center">
                <a
                  href="#"
                  className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
                >
                  Learn more <i className="fa-solid fa-arrow-right ms-2" />
                </a>
              </button>
            </div>
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <img src="assets/images/features/desktop1.gif" />
            </div>
          </div>
        </div>
        <div className="xl:py-24 py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div>
              <img
                src="assets/images/hero/desktop.png"
                data-aos="fade-right"
                data-aos-duration={1500}
              />
            </div>
            <div>
              <Title
                page="Auto-tune your marketing campaigns"
                text={`The Prompts keeps an eye on your all marketting effort and auto
                tune the marketing campaigns settings to make them perform
                better`}
                isCenter={false}
              />
              <button className="mt-12 flex items-center">
                <a
                  href="#"
                  className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
                >
                  Learn more <i className="fa-solid fa-arrow-right ms-2" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;

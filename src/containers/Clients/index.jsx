import React from "react";

function Clients() {
  return (
    <section className="xl:py-24 py-16">
      <div className="container" data-aos="fade-up" data-aos-duration={1000}>
        <div className="text-center">
          <div>
            <p className="text-base font-semibold">
              Join 10,000+ companies who trust Prompt.
            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 mt-7">
              <div>
                <img src="assets/images/brands/amazon.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/google.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/paypal.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/spotify.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/shopify.svg" className="w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;

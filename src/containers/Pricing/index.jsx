import React from "react";
import Title from "../../components/Title";
import pricingData from "../../data/pricing.data";
import PricingCard from "../../components/PricingCard";

function Pricing() {
  return (
    <section className="xl:py-24 py-16" id="pricing">
      <div className="container" data-aos="fade-up" data-aos-duration={1500}>
        <Title
          title="Pricing"
          page="Pricing Plans"
          text={`Pricing that works for everyone.`}
          isCenter={true}
        />
        <div className="pt-16 overflow-x-auto">
          <div className="inline-block overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="text-center divide-y">
                  <th className="px-5 py-4 xl:w-2/5 w-1/2 text-xs text-start border-b-2 border-t" />
                  <th className="px-5 py-4 xl:w-[15%] w-1/4">
                    <h1>Starter</h1>
                    <p className="text-gray-500 text-xs">$40/mo</p>
                  </th>
                  <th className="px-5 py-4 w-1/4 border-s">
                    <h1>
                      Professional{" "}
                      <span className="inline-flex text-xs bg-red-500 text-white rounded-full py-1 px-3">
                        Popular
                      </span>{" "}
                    </h1>
                    <p className="text-gray-500 text-xs">$60/mo</p>
                  </th>
                  <th className="px-5 py-4 w-[10%] border-s">
                    <h1>Enterprise</h1>
                    <p className="text-gray-500 text-xs">$300/mo</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <PricingCard item={item} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

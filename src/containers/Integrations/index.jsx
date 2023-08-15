import React from "react";
import Title from "../../components/Title";
import IntegrationCard from "../../components/IntegrationCard";
import integrationData from "../../data/integration.data";

function Integrations() {
  return (
    <section className="bg-gray-100 xl:py-24 py-16" id="integrations">
      <div className="container" data-aos="fade-up" data-aos-duration={1500}>
        <Title
          title="Integrations"
          page="Sync your data anywhere"
          text={`Sync your campaigns or other marketing data anywhere.`}
          isCenter={true}
        />
        <div className="pt-16">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-7">
            {integrationData.map((item, index) => (
              <IntegrationCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;

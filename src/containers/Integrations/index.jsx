import React from "react";
import Title from "../../components/Title";

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
            <div>
              <div className="bg-white flex items-center rounded gap-5 p-5">
                <img src="assets/images/brands/slack.png" className="w-16" />
                <div>
                  <h1 className="mb-3">Slack</h1>
                  <p className="text-gray-500">
                    Slack is a platform for team communication: everything in
                    one place, instantly searchable, available wherever you go
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white flex items-center rounded gap-5 p-5">
                <img src="assets/images/brands/fb.png" className="w-16" />
                <div>
                  <h1 className="mb-3">Facebook Lead Ads</h1>
                  <p className="text-gray-500">
                    Facebook lead ads make signing up for business information
                    easy for people and more valuable for businesses
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white flex items-center rounded gap-5 p-5">
                <img
                  src="assets/images/brands/salesforce.jpg"
                  className="w-16"
                />
                <div>
                  <h1 className="mb-3">Salesforce</h1>
                  <p className="text-gray-500">
                    Salesforce is a leading enterprise customer relationship
                    manager (CRM) application
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white flex items-center rounded gap-5 p-5">
                <img src="assets/images/brands/at.png" className="w-16" />
                <div>
                  <h1 className="mb-3">Airtable</h1>
                  <p className="text-gray-500">
                    Organize anything with Airtable, a modern database created
                    for everyone
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white flex items-center rounded gap-5 p-5">
                <img
                  src="assets/images/brands/gsheet.png"
                  className="xl:w-32 w-16"
                />
                <div>
                  <h1 className="mb-3">Google Sheets</h1>
                  <p className="text-gray-500">
                    Create, edit, and share spreadsheets with Google Sheets, and
                    get automated insights from data
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white flex items-center rounded gap-5 p-5">
                <img src="assets/images/brands/ac.jpg" className="w-16" />
                <div>
                  <h1 className="mb-3">ActiveCampaign</h1>
                  <p className="text-gray-500">
                    ActiveCampaign combines all aspects of email marketing into
                    a single and easy-to-use platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;

import React from "react";

function IntegrationCard({ item }) {
  return (
    <div>
      <div className="bg-white flex items-center rounded gap-5 p-5">
        <img src={item.image} className={item.style} />
        <div>
          <h1 className="mb-3">{item.name}</h1>
          <p className="text-gray-500">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default IntegrationCard;

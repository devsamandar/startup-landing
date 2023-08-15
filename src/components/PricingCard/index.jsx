import React from "react";

function PricingCard({ item }) {
  return (
    <tr className="text-center divide-y border-b">
      <td className="p-3 text-start ">
        <p>{item.title}</p>
      </td>
      <td className="p-3 border-r">
        {item.starter && typeof item.starter === "boolean" ? (
          <span>
            <i className="fa-solid fa-check text-green-500" />
          </span>
        ) : typeof item.starter === "string" ? (
          <>
            <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">
              {item.starter}
            </span>
          </>
        ) : (
          <></>
        )}
      </td>
      <td className="p-3 border-r">
        {item.professional && typeof item.professional === "boolean" ? (
          <span>
            <i className="fa-solid fa-check text-green-500" />
          </span>
        ) : typeof item.professional === "string" ? (
          <>
            <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">
              {item.professional}
            </span>
          </>
        ) : (
          <></>
        )}
      </td>
      <td className="p-3">
        {item.enterprise && typeof item.enterprise === "boolean" ? (
          <span>
            <i className="fa-solid fa-check text-green-500" />
          </span>
        ) : typeof item.enterprise === "string" ? (
          <>
            <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">
              {item.enterprise}
            </span>
          </>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
}

export default PricingCard;

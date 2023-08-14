import React from "react";

function Title({ title, page, text, isCenter, titleStyle }) {
  return (
    <div className={isCenter ? "text-center" : ""}>
      {title && (
        <span
          className={`text-sm font-medium py-1 px-3 rounded-full  ${
            titleStyle || "bg-primary/10 text-primary"
          }`}
        >
          {title}
        </span>
      )}
      <h1 className="text-3xl/tight font-medium mt-3 mb-4">{page}</h1>
      <p className="text-gray-500">{text}</p>
    </div>
  );
}

export default Title;

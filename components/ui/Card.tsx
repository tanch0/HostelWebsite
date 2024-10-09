import { CardProps } from "@/types/card";
import React from "react";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icons,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-600">
          {icons && icons({ className: "w-6 h-6" })}
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

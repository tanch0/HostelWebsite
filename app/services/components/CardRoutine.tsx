import React from "react";
import { HostelMenuItem } from "@/types/card";

export const CardRoutine: React.FC<HostelMenuItem> = ({
  title,
  morningFood,
  nightFood,
  eveningFood,
  dayTime,
  nightTime,
  icons: Icons,
}) => {
  return (
    <div className="transition-all duration-300 transform hover:scale-105 bg-white shadow-lg hover:shadow-xl m-4 p-6 rounded-lg relative overflow-hidden group">
      <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-10 transition-all duration-300 group-hover:bg-blue-600 group-hover:w-full"></div>
      <div className="flex items-center space-x-4 mb-4">
        {Icons && (
          <Icons className="w-12 h-12 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          {/* <p className="text-sm font-medium text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
            {dayTime} - {nightTime}
          </p> */}
        </div>
      </div>
      <div className="space-y-3">
        {[
          { label: "Morning Food", value: morningFood },
          { label: "Evening Snacks", value: eveningFood },
          { label: "Night Food", value: nightFood },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center">
            <span className="w-1/3 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              {label}:
            </span>
            <span className="w-2/3 text-sm text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRoutine;

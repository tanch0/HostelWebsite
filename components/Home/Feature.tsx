import React from "react";
import { features } from "@/const/feature";
import { Card } from "@/components/ui/Card";

export default function Feature() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Features you'll love</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive documentation template built for everyone who wants to
          create a plugin.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            icons={feature.icons}
          />
        ))}
      </div>
    </div>
  );
}

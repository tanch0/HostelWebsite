import { StaticImageData } from "next/image";
import { FC, SVGProps } from "react";

export type CardProps = {
  title: string;
  description: string;
  image?: StaticImageData;
  icons?: FC<SVGProps<SVGSVGElement>>;
};

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Faq{
  question: string;
  answer: string;
}

export interface HostelMenuItem {
  title: string;
  dayTime: string; 
  nightTime: string; 
  morningFood: string;
  nightFood: string;
  eveningFood: string;
  icons?: FC<SVGProps<SVGSVGElement>>;
}
"use client";
import React from "react";
import Slider from "react-slick";
import { testimonials } from "@/const/testimonail";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our residents have to say about their experience at Rising
            Star Boys Hostel – a place where comfort, safety, and community come
            together.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <TestimonialCard
                  title={testimonial.title}
                  description={testimonial.description}
                  image={testimonial.image}
                  icons={testimonial.icons}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

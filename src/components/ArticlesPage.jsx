import { div, h1 } from "framer-motion/client";
import React from "react";

function ArticlesPage() {
  return (
    <div className="bg-[#F5F6EE] h-screen flex">
      {/* Left Side Content */}
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h1 className="text-4xl font-bold mb-6">The Global Problem</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Bulk stock and poor inventory rotation are major reasons why food gets
          wasted in retail and food service. Around{" "}
          <span className="font-semibold">26% of global food waste</span>
          comes from these sectors. Over-ordering, mismanaged back-stock, and
          delayed sales often lead to items expiring before they are used or
          sold. This not only causes
          <span className="font-semibold"> financial losses</span> but also
          damages
          <span className="font-semibold">
            {" "}
            brand reputation and customer trust
          </span>
          .
        </p>

        {/* Links */}
        <div className="flex flex-col mt-6">
          <p className="text-gray-800 font-medium ">
            Check out the articles below to learn more
          </p>
          <a
            href="https://retailcurated.com/editorial/reducing-food-waste-what-retailers-can-do/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Retail Curated – Reducing Food Waste in Retail
          </a>
          <a
            href="https://cognitiwe.ai/food-waste-in-retail"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cognitiwe – Food Waste in Retail
          </a>
          <a
            href="https://www.sciencedirect.com/science/article/pii/S0925527317302335"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ScienceDirect – Inventory Policies for Perishable Products
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 h-screen">
        <img
          src="/images/foodWastage.webp"
          alt="Food waste illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ArticlesPage;

import React from "react";
import serviceskew from "../../../assets/serviceskew.png"

const Section2 = () => {
  return (
        
        <div className="flex bg-[#0030AB] text-center transform skew-y-2 p-4 mx-auto w-screen">
                <div className="transform-none flex-[20%]">
                    <img src={serviceskew} alt="" className="w-[250px] h-[300px]" />
                </div>
                <div className="transform-none flex-[80%]">
                    <h2 className="transform-none text-[#F8FAFC] text-3xl font-800">Monetization Opportunities</h2>
                    <div className="transform-none text-center text-[#F8FAFC] text-xs font-200 w-[400px]">
                        Monetizing your content is a great way to turn your passion into a career. We offer a variety of monetization opportunities, including sponsored posts, affiliate marketing, and merchandise sales, to help you earn revenue from your content.
                    </div>
                </div>
        </div>
        


  );
};

export default Section2;


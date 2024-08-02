import React, { useState } from "react";

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const services = [
    { title: "Digital Marketing", description: "We offer a comprehensive range of digital marketing services..." },
    { title: "Social Media Management", description: "We help businesses develop effective social media strategies and manage their social media presence..." },
    { title: "Web/App Development", description: "We design and develop professional and user-friendly websites and mobile apps that align with our clients' brand and business goals..." },
    { title: "Data Analytics & Insights", description: "We help you harness the power of data by implementing advanced analytics tools and techniques..." },
    { title: "CRM Implementation", description: "We assist businesses in implementing Customer Relationship Management systems to streamline their sales..." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-8 md:p-16 mx-0 md:mx-4 font-light font-pp-neue-machina">
      <div className="md:p-8 pb-6 md:pb-0">
        <p className="md:text-3xl text-2xl mb-3">Our Services</p>
        <span className="font-bold md:text-6xl text-2xl text-accentblue">To BE is <br className="hidden md:block" />to DO</span>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue p-6 pb-0 md:p-10 transition-all duration-300 cursor-pointer md:hover:bg-accentblue md:hover:shadow-orangebuttonshadow ${expanded === index ? "bg-accentblue shadow-orangebuttonshadow" : ""}`}
          onClick={() => toggleExpand(index)}
        >
          <div className="absolute mt-4 -mr-8 md:mt-0 md:mr-0 md:relative mb-8">
            <span className={`text-accentorange font-bold md:text-3xl text-xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white ${expanded === index ? "bg-accentorange text-white" : ""}`}>{`0${index + 1}`}</span>
          </div>
          <div className="mb-4 ml-16 md:ml-0">
            {/* Show title for desktop and mobile when not expanded */}
            <h3 className={`font-bold text-xl md:text-2xl text-accentblue md:mb-16 transition-all duration-500 group-hover:text-white ${expanded === index ? "md:block hidden" : ""}`}>
              {service.title}
            </h3>
            {/* Show description only on mobile when expanded */}
            {expanded === index && (
              <p className="transition-all duration-300 group-hover:text-white text-xs md:hidden min-h-14">
                {service.description}
              </p>
            )}
            {/* Show description for desktop */}
            <p className={`transition-all duration-300 group-hover:text-white text-xs invisible h-0 absolute md:relative md:visible md:h-auto lg:block`}>
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

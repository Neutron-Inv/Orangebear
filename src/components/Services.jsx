import React from "react";

export default function Services(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-8 md:p-16 mx-4 md:mx-4 font-light font-pp-neue-machina">
        <div className="p-8">
            <p className="text-3xl mb-3">Our Services</p>
            <span className="font-bold text-6xl text-accentblue">To BE is <br/> to DO</span>
        </div>
        <div className="group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-1 transition-all duration-300 hover:bg-accentblue hover:shadow-orangebuttonshadow">
        <div className="lg:mb-8 mb-8">
            <span className="text-accentorange font-bold text-3xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white">01</span>
        </div>
        <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 transition-all duration-500 group-hover:text-white md:min-h-[2.5rem]">Digital Marketing</h3>
            <span>
            <p className="transition-all duration-300 group-hover:text-white text-xs">
            We offer a comprehensive range of digital marketing services...
            </p>
            </span>
        </div>
        </div>
        <div className="group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-1 transition-all duration-300 hover:bg-accentblue hover:shadow-orangebuttonshadow">
        <div className="lg:mb-8 mb-8">
            <span className="text-accentorange font-bold text-3xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white">02</span>
        </div>
        <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 transition-all duration-500 group-hover:text-white md:max-h-[2.5rem]">Social Media Management</h3>
            <span>
            <p className="transition-all duration-300 group-hover:text-white text-xs">
            We help businesses develop effective social media strategies and manage their social media presence...
            </p>
            </span>
        </div>
        </div>


        <div className="group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-5 transition-all duration-300 hover:bg-accentblue hover:shadow-orangebuttonshadow">
        <div className="lg:mb-8 mb-8">
            <span className="text-accentorange font-bold text-3xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white">03</span>
        </div>
        <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 transition-all duration-500 group-hover:text-white md:max-h-[2.5rem]">Web/App Development</h3>
            <span>
            <p className="transition-all duration-300 group-hover:text-white text-xs">
                We design and develop professional and user friendly websites and mobile apps that align with our clients' brand and business goals...
            </p>
            </span>
        </div>
        </div>
        <div className="group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-5 transition-all duration-300 hover:bg-accentblue hover:shadow-orangebuttonshadow">
        <div className="lg:mb-8 mb-8">
            <span className="text-accentorange font-bold text-3xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white">04</span>
        </div>
        <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 transition-all duration-500 group-hover:text-white md:max-h-[2.5rem]">Data Analytics & Insights</h3>
            <span>
            <p className="transition-all duration-300 group-hover:text-white text-xs">
            We help you harness the power of data by implementing advanced analytics tools and techniques...
            </p>
            </span>
        </div>
        </div>
        <div className="group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-5 transition-all duration-300 hover:bg-accentblue hover:shadow-orangebuttonshadow">
        <div className="lg:mb-8 mb-8">
            <span className="text-accentorange font-bold text-3xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white">05</span>
        </div>
        <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 transition-all duration-500 group-hover:text-white md:max-h-[2.5rem]">CRM Implementation</h3>
            <span>
            <p className="transition-all duration-300 group-hover:text-white text-xs">
            We assist businesses in implementing Customer Relationship Management systems to streamline their sales...
            </p>
            </span>
        </div>
        </div>
        </div>
    )
}
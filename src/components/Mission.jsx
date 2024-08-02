import React from "react";
import Missionn from "../images/mission.png";
import Visionn from "../images/vision.png";

export default function Mission(){
    return(
        <div className="group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-2 md:p-16 mx-8 md:mx-4 font-light font-pp-neue-machina">
        <div className="p-0 pt-10 md:p-8 md:mb-0 mb-6">
            <p className="text-xl md:text-3xl mb-3">About Us</p>
            <span className="font-black text-2xl md:text-5xl text-accentblue md:text-wrap text-nowrap">Manners <br className="hidden md:block" /> Maketh Man</span>
        </div>
        </div>
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12 p-2 md:p-16 mx-8 md:mx-4 transition-all duration-500 font-pp-neue-machina lg:h-screen">
            
            <div className="justify-self-end w-full h-full md:w-1/2 lg:mt-24">
                <div className="w-full object-top">
                <span className="block text-2xl font-bold mb-4 text-gray-500">Our Vision</span>
                <p className="text-xs font-pp-neue-machina text-gray-400">
                    Orange Bear Limited is committed to a vision of becoming a world-class digital marketing firm through top-notch execution
                    and timely delivery. We aim to create an inclusive ecosystem of the most efficient, effective, professional, competent, driven,
                    motivated, accountable, well-versed experts, delivering the best services to our clients.
                </p>
                </div>
            <div>
                <img src={Visionn} alt="vison" className="md:absolute md:block md:transform md:rotate-45 md:-left-24 md:-mt-96  mt-10 transition duration-700 ease-in-out scale-75 md:group-hover:scale-125"></img>
            </div>
            </div>

            <div className="justify-self-end justify-end w-full h-full lg:-mt-24">
                <div className="w-full md:w-1/2 place-self-start">
                    <div className="md:text-right">
                    <span className="block text-2xl font-bold mb-4 text-gray-500">Our Mission</span>
                    <p className="text-xs font-pp-neue-machina text-gray-400">
                    Working with Clientele to help them be successful as we
                    develop a diversified customer base encompassing individuals and
                    businesses cut across variety of the industry and economies.
                    </p>
                    </div>
                </div>
                <div>
                <img src={Missionn} alt="mission" className="md:absolute lg:block  transform md:-right-24 md:-mt-96 transition duration-700 ease-in-out scale-75 md:group-hover:scale-125"></img>
            </div>
            </div>
    
        </div>
        <div className="invisible md:visible md:flex md:justify-center md:items-center font-pp-neue-machina -mt-40 md:-mt-20 md:pb-20">
            <div className="flex flex-col justify-center items-center font-pp-neue-machina">
            <h2 className="text-5xl text-accentorange font-bold">Trusted by Our Clients</h2><br/>
            <p className="text-md text-gray-500"> we have been able to put a smile on our clients' faces</p>
            </div>
        </div>
        </div>
    )
}
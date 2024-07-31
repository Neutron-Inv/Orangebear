import React from "react";
import Missionn from "../images/mission.png";
import Visionn from "../images/vision.png";

export default function Mission(){
    return(
        <div className="group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-8 md:p-16 mx-4 md:mx-4 font-light font-pp-neue-machina">
        <div className="p-8">
            <p className="text-3xl mb-3">About Us</p>
            <span className="font-black text-5xl text-accentblue">Manners <br/> Maketh Man</span>
        </div>
        </div>
        <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16 mx-24 md:mx-4 transition-all duration-500 font-pp-neue-machina lg:h-screen">
            
            <div className="justify-self-end w-full h-full md:w-1/2 lg:mt-24">
            <div>
                <img src={Visionn} alt="vison" className="absolute md:block transform rotate-45 -left-24 -mt-44 transition duration-700 ease-in-out group-hover:scale-125"></img>
            </div>
                <div className="w-full object-top">
                <span className="block text-2xl font-bold mb-4 text-gray-500">Our Vision</span>
                <p className="text-xs font-pp-neue-machina text-gray-400">
                    Orange Bear Limited is committed to a vision of becoming a world-class digital marketing firm through top-notch execution
                    and timely delivery. We aim to create an inclusive ecosystem of the most efficient, effective, professional, competent, driven,
                    motivated, accountable, well-versed experts, delivering the best services to our clients.
                </p>
                </div>
            </div>

            <div className="justify-self-end justify-end w-full h-full lg:-mt-24">
            <div>
                <img src={Missionn} alt="mission" className="absolute lg:block  transform -right-24 -mt-48 transition duration-700 ease-in-out group-hover:scale-125"></img>
            </div>
                <div className="w-full md:w-1/2 place-self-start">
                    <div className="text-right">
                    <span className="block text-2xl font-bold mb-4 text-gray-500">Our Mission</span>
                    <p className="text-xs font-pp-neue-machina text-gray-400">
                    Working with Clientele to help them be successful as we
                    develop a diversified customer base encompassing individuals and
                    businesses cut across variety of the industry and economies.
                    </p>
                    </div>
                </div>
            </div>
    
        </div>
        <div className="flex justify-center items-center font-pp-neue-machina pb-20">
            <div className="flex flex-col justify-center items-center font-pp-neue-machina">
            <h2 className="text-5xl text-accentorange font-bold">Trusted by Our Clients</h2><br/>
            <p className="text-md text-gray-500"> we have been able to put a smile on our clients' faces</p>
            </div>
        </div>
        </div>
    )
}
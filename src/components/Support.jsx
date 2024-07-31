import React from "react";
import Team1 from "../images/team1.png";
import Team2 from "../images/team2.png";
import Team3 from "../images/team3.png";
import Team4 from "../images/team4.png";

export default function Support(){
    return(
        <div >
        <div className="p-16">
        <div className="p-8 font-pp-neue-machina">
            <span className="font-bold text-3xl text-accentorange">We’d Be Thrilled To Hear From You!</span><br/>
        <p className="text-sm mb-3 mt-10 text-gray-500 leading-4">Drop your inquiries using the form, and we would get back to you <br/>
        as soon as possible
        </p>
        </div>


        <div className="group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-1">
            <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 md:min-h-[2.5rem]">Leave Us A Message</h3>
            <div className="grid grid-cols-2 gap-4">
                <div> 
                <input placeholder="Preferred Name" className="w-full text-xs p-4 pl-6 my-2 border rounded-2xl bg-gray-300"/>
                
                <input placeholder="Email" className="w-full text-xs p-4 pl-6 my-2 border rounded-2xl bg-gray-300"/>
                
                <textarea placeholder="Write a message" className="w-full text-xs p-4 pl-6 my-2 border rounded-2xl h-24 bg-gray-300"></textarea>

                <button className="text-white bg-accentorange w-full md:w-5/12 h-10 md:h-14 font-bold text-lg md:text-2xl rounded-3xl mt-5 shadow-bluebuttonshadow">
                    Send
                </button>
                </div>
                <div className="text-sm items-center mx-auto my-auto leading-4 font-pp-neue-machina">
                <div className="leading-3">
                    We take calls on:<br/>
                    <span className="font-bold text-lg">+234 902 370 4924</span><br />
                    <span className="font-bold text-accentorange">Monday - Friday<br />
                    9AM TO 5PM/span</span>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
import React from "react";
import { Link

 } from "react-router-dom";
export default function Contact(){
    return( 
        <div className="flex bg-accentorange w-100 h-20 items-center justify-center">
            <Link to="/contact" className="text-center font-pp-neue-machina font-bold text-xl text-white hover:bg-accentblue transition-all duration-300 p-4 px-14 rounded-3xl">Contact Us</Link>
        </div>
    )
}
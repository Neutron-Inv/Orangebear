import React, { useState } from "react";

export default function Support(){

        const [preferredName, setPreferredName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [responseMessage, setResponseMessage] = useState("");
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const formData = new FormData();
          formData.append("preferred_name", preferredName);
          formData.append("email", email);
          formData.append("message", message);
      
          try {
            const response = await fetch("https://orangebearltd.com/api/contact.php", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();
            console.log(data);
            setResponseMessage(data.message);
          } catch (error) {
            setResponseMessage("Failed to send message. Please try again later.");
          }
        };

        
    return(
        <div >
        <div className="md:p-16 p-4x">
        <div className="p-8 font-pp-neue-machina">
            <span className="font-bold md:text-3xl text-2xl text-accentorange">We’d Be Thrilled To Hear From You!</span><br/>
        <p className="text-sm mb-3 mt-10 text-gray-500 leading-4">Drop your inquiries using the form, and we would get back to you <br/>
        as soon as possible
        </p>
        </div>


        <div className="group md:border-2 md:rounded-2xl shadow-skybuttonshadow border-accentblue pl-10 pt-16 pr-10 pb-1">
            <div className="lg:mb-4 mb-4 pb-16">
            <h3 className="font-bold text-2xl text-accentblue mb-16 md:min-h-[2.5rem]">Leave Us A Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
      <input
        placeholder="Preferred Name"
        className="w-full text-xs p-4 pl-6 my-2 border rounded-2xl bg-gray-300"
        value={preferredName}
        onChange={(e) => setPreferredName(e.target.value)}
      />
      
      <input
        placeholder="Email"
        className="w-full text-xs p-4 pl-6 my-2 border rounded-2xl bg-gray-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <textarea
        placeholder="Write a message"
        className="w-full text-xs p-4 pl-6 my-2 border rounded-2xl h-24 bg-gray-300"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="text-white bg-accentorange w-full md:w-5/12 h-10 md:h-14 font-bold text-lg md:text-2xl rounded-3xl mt-5 shadow-bluebuttonshadow"
      >
        Send
      </button>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
                <div className="text-sm md:items-center md:mx-auto my-auto pt-10 md:pt-0 leading-4 font-pp-neue-machina">
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
  );
}
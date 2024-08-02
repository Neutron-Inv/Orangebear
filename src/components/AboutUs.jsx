import React, { useState } from "react";
import Team1 from "../images/team1.png";
import Team2 from "../images/team2.png";
import Team3 from "../images/team3.png";
import Team4 from "../images/team4.png";
import Clock from "../images/clock.png";

export default function AboutUs(){

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
      setExpanded(expanded === index ? null : index);
    };
  
    const services = [
      { title: "Client-Centric Innovation", description: "We design and develop professional and user-friendly websites and mobile apps that align with our clients’ brand and business goals..." },
      { title: "Tailored Excellence", description: "We design and develop professional and user-friendly websites and mobile apps that align with our clients’ brand and business goals..." },
      { title: "Collaborative Expertise", description: "We design and develop professional and user-friendly websites and mobile apps that align with our clients’ brand and business goals..." },
      { title: "Ethical Integrity", description: "We design and develop professional and user-friendly websites and mobile apps that align with our clients’ brand and business goals..." }
    ];

    return(
        <div >
        <div className="md:p-16 p-0">
        <div className="p-8 font-pp-neue-machina">
            <span className="font-bold md:text-6xl text-2xl text-accentblue">Our <span className="text-accentorange">Not-So</span> Boring <br/> Paper Work</span><br/>
        <p className="text-sm mb-3 mt-10 text-gray-500">We are a digital marketing company that offers technological solutions. We understand that every brand is unique, and start-ups are no exception. To help you stand out from the competition, reach your audience, and express your individual story within your budget, we offer our services.
        <br/>
        As a brand, we understand the importance of getting the most value for your money. 
        For a similar cost to hiring one key employee, our team can act as your entire marketing and sales department. </p>
        </div>
        <div className="p-8 font-pp-neue-machina">
        <span className="md:text-3xl text-2xl font-bold text-accentblue"> Who We Are?</span><br/><br/>
        <p className="text-sm text-gray-500">
        Our <span className="font-bold">team </span>consists <span className="font-bold">of experts</span> in public relations, tech and innovation, advertising, digital marketing, creative storytelling, visual communications, marketing strategy, and brand management.<br/><br/>
        We maintain a fluid working space and work culture.<br/><br/>
        Through our comprehensive range of digital marketing and technological business solutions, <span className="font-bold">experience the Orangebear difference</span> and take your marketing efforts to new heights.
        </p>
        </div>

        <div className="p-8 font-pp-neue-machina">
        <span className="md:text-3xl text-2xl font-bold text-accentblue"> What We Offer?</span><br/><br/>
        <ul className="list-disc ml-5 text-gray-500 text-sm leading-4">
            <li>Social Media Strategy and Management</li>
            <li>Online Advertising and Campaigns & Digital Marketing</li>
            <li>Billboard Adevertising</li>
            <li>Public Relations</li>
            <li>CRM Implementation</li>
            <li>Data Analytics and Insights</li>
            <li>Business Process Automation</li>
            <li>Customer Experience Enhancement, and more</li>
        </ul>
        </div>

        <div className="p-12 font-pp-neue-machina bg-accentblue md:rounded-3xl my-10 md:mx-10">
        <span className="md:text-3xl text-2xl font-bold text-accentorange"> What Keeps us Ticking?</span><img className="float-right invisible md:visible" src={Clock} alt="clock"/><br/><br/>
        <p className="text-white text-sm">
        At OrangeBear, our core values define the very essence of who we are and guide every aspect of our work. Client-Centric Innovation isn't just a tagline; it's a philosophy that places our clients' unique needs at the heart of everything we do. We thrive on crafting solutions that are tailor-made for each challenge, harnessing the power of Tailored Excellence to consistently surpass expectations.<br/><br/>
        Our commitment to Ethical Integrity ensures that every interaction is characterized by transparency, honesty, and the highest ethical standards, fostering lasting trust and collaboration. We believe in the strength of collective expertise, empowering and valuing collaboration among our team members and partners.
        </p>
        </div>
        </div>
        <div className="md:p-16 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-16 mx-0 md:mx-0 font-light font-pp-neue-machina w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue min-h-24 p-6 pb-0 md:p-10 transition-all duration-300 cursor-pointer md:hover:bg-accentblue md:hover:shadow-orangebuttonshadow ${expanded === index ? "bg-accentblue shadow-orangebuttonshadow" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="absolute mt-4 -mr-8 md:mt-0 md:mr-0 md:relative mb-8">
              <span className={`text-accentorange font-bold md:text-3xl text-xl rounded-full p-3 bg-accentblue transition-all duration-350 group-hover:bg-accentorange group-hover:text-white ${expanded === index ? "bg-accentorange text-white" : ""}`}>{`0${index + 1}`}</span>
            </div>
            <div className="mb-4 ml-16 md:ml-0">
              {/* Show title for mobile and desktop when not expanded */}
              <h3 className={`font-bold text-xl md:text-2xl text-accentblue mb-4 transition-all duration-500 group-hover:text-white ${expanded === index ? "hidden" : "block"} md:block`}>
                {service.title}
              </h3>
              {/* Show description only on mobile when expanded */}
              {expanded === index && (
                <p className="transition-all duration-300 group-hover:text-white text-xs md:hidden">
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

      <div className="p-8 text-center md:text-left xfont-pp-neue-machina pt-20 pb-10 md:pt-40 md:pb-20">
        <span className="text-2xl md:text-3xl text-gray-500">Meet The Team Behind This Project</span><br /><br />
        <span className="md:text-6xl text-3xl font-bold text-accentblue">Meet The <span className="text-accentorange line-through">Musketeers</span> Boys</span><br /><br />
        <p className="text-gray-500 text-md leading-4">Get to know the dedicated individuals who drive our success and innovation.<br />
          We bring expertise, integrity, and collaboration to every project.
        </p>
      </div>
    </div>


        <div className="grid md:grid-cols-4 gap-0 font-pp-neue-machina text-accentblue md:text-white">
        <div className="grayscale absolute invisible md:relative md:visible"><img src={Team1} alt="hero"/></div>
        <div className="grayscale absolute invisible md:relative md:visible"><img src={Team2} alt="hero"/></div>
        <div className="grayscale absolute invisible md:relative md:visible"><img src={Team3} alt="hero"/></div>
        <div className="grayscale absolute invisible md:relative md:visible"><img src={Team4} alt="hero"/></div>
        <div className="bg-accentorange text-center text-sm leading-4 py-8 mb-0 min-h-24 md:h-auto pt-16 md:pt-8"><div className="md:hidden absolute -mt-9 ml-2 grayscale w-24 h-24 p-2"><img className="rounded-full" src={Team1} alt="hero"/></div><span className="font-bold align-middle">Joshua Chukwuzubelu</span> <br/>Chief Executive Officer</div>
        <div className="bg-accentorange text-center text-sm leading-4 py-8 mb-0 min-h-24 md:h-auto"><span className="font-bold">Emeka Nwachi</span> <br/>Creative Director<div className="md:hidden absolute -mt-[68px] right-5 grayscale w-24 h-24 p-2"><img className="rounded-full" src={Team2} alt="hero"/></div></div>
        <div className="bg-accentorange text-center text-sm leading-4 py-8 mb-0 min-h-24 md:h-auto"><div className="md:hidden absolute -mt-9 ml-2 grayscale w-24 h-24 p-2"><img className="rounded-full" src={Team3} alt="hero"/></div><span className="font-bold">Divine Awazie</span> <br/>Business Strategist</div>
        <div className="bg-accentorange text-center text-sm leading-4 py-8 mb-0 min-h-24 md:h-auto pb-16 md:pb-0"><span className="font-bold">Ayoola David</span> <br/>Tech Lead<div className="md:hidden absolute -mt-[68px] right-5 grayscale w-24 h-24 p-2"><img className="rounded-full" src={Team4} alt="hero"/></div></div>
        </div>
        </div>
    )
}
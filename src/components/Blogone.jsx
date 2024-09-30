import React, { useState } from "react";
import Heroimage from "../images/heroimage.png";
import Heroimage2 from "../images/article2.jpg";
import Heroimage3 from "../images/article3.png";
import { Link } from "react-router-dom";
export default function Blogone(){
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
        <div className="md:p-0 p-0">
        <div className="p-8 lg:p-14 font-pp-neue-machina">
            <span className="font-bold md:text-6xl text-2xl text-accentblue">Web 3.0: Evolution of Digital Marketing</span><br/>
        </div>
        <img
            src={Heroimage}
            alt="hero"
            className="w-full object-cover rounded-none max-h-[300px] min-h-[300px]"
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 justify-text">
        <div className="col-span-2 lg:p-28 p-8">
        <p className="text-sm mb-3 text-gray-500 font-pp-neue-machina justify-text">
        In recent times, a growing number of Internet users have become acquainted with the concept of Web 3 and its transformative impact on Internet technology.<br/>
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3 "><b>Birth of Web 1</b></p><br/>
        In 1998, Tim Berners-Lee, while working at CERN, invented the World Wide Web, commonly known as ‘www.' Although its implementation took place in late 1990, it is important to understand the historical context behind the creation of the web.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3"><b>Emergence of Web 2</b></p><br/>
        As the web evolved, Berners-Lee realized the endless possibilities it could achieve if everyone had free access to it. He famously said, “Had the technology been proprietary and in my total control, it probably would not have taken off.” Web 1 primarily facilitated the flow of information, while Web 2 introduced a focus on interaction.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3"><b>Impact of Web 2 on Marketing</b></p><br/>
        The emergence of Web 2 marked a significant shift in the way we communicate and interact with each other on the Internet. Social media platforms like WhatsApp, Facebook, Instagram, and LinkedIn gave users the ability to share ideas, pictures, and videos, making them accessible to individuals around the globe from the comfort of their own homes.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3"><b>The Concept of Web 3</b></p><br/>
        While Web 2 operates on a server-client structure, where centralized private organizations control and own data, Web 3 seeks to replace this infrastructure with distributed ledgers, exemplified by technologies like blockchain.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3"><b>Impact of Web 3 on Digital Marketing</b></p><br/>
        The impact of Web 3 on digital marketing is significant. Marketing has evolved alongside the development of the web. Web 1 quickly adopted advanced advertising when web advertisement banners first appeared on websites in the 1990s.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3"><b>The Future of Digital Marketing</b></p><br/>
        Web 3 provides marketers with the opportunity to restore trust and reconnect with consumers by giving them control and ownership over their data. Several brands are already exploring the Web 3 space. For instance, Nike recently acquired RTFKT, an NFT studio. The metaverse and the rise of non-fungible tokens (NFTs) are reshaping the marketing landscape, with renowned brands diving into the world of NFTs.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina justify-text">
        <p className="text-2xl -mb-3"><b>Conclusion</b></p><br/>
        In conclusion, Web 3 offers marketers a chance to revisit the fundamentals of marketing and directly connect with customers, providing genuine value and experiences. Web 3 promises to revolutionize how we utilize the internet and conduct business online, opening up new possibilities for the future of digital marketing.
        </p>

        </div>
        <div className="p-8 lg:pr-0 lg:py-28 sm:-mt-28 md:mt-0 font-pp-neue-machina">
        <div className="flex self-start mb-12">
        <img
            src={Heroimage2}
            alt="hero"
            className="w-24 md:w-36 object-cover rounded-none min-h-24 max-h-24 md:max-h-36 md:min-h-36"
          />
          <p className="flex items-center lg:px-8 p-4"><Link to="/blog2"><b>The VAN WESTERN Pricing Model</b></Link></p>
        </div>
        <div className="flex self-start">
        <img
            src={Heroimage3}
            alt="hero"
            className="w-24 md:w-36 object-cover rounded-none min-h-24 max-h-24 md:max-h-36 md:min-h-36"
          />
          <p className="flex md:items-center lg:px-8 p-4"><Link to="/blog3"><b>Micro-Moments: How to Optimize Content for Mobile-First Audiences</b></Link></p>
        </div>
        </div>
        <div></div>
        </div>
        </div>
    )
}
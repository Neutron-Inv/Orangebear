import React, { useState } from "react";
import Heroimage from "../images/heroimage.png";
import Heroimage2 from "../images/article2.jpg";
import Heroimage3 from "../images/article3.png";
import { Link } from "react-router-dom";

export default function Blogtwo(){
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
            <span className="font-bold md:text-6xl text-2xl text-accentblue">The VAN WESTERN Model: A Pricing Analysis Tool</span><br/>
        </div>
        <img
            src={Heroimage2}
            alt="hero"
            className="w-full object-cover rounded-none max-h-[300px] min-h-[300px]"
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 justify-text">
        <div className="col-span-2 lg:p-28 p-8">
        <p className="text-sm mb-3 text-gray-500 font-pp-neue-machina">
        <p className="text-2xl -mb-3"><b>Understanding Competitor Pricing Strategies</b></p><br/>
        In marketing, understanding your competitors' pricing strategies is crucial to stay ahead. One effective approach to analyzing competitors' pricing is the VAN WESTERN model, which helps you determine the optimal price range for your product or service.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina">
        <p className="text-2xl -mb-3"><b>The VAN WESTERN Model: A Pricing Analysis Tool</b></p><br/>
        The VAN WESTERN model is based on the idea that consumers perceive price as a reflection of quality. This model consists of four key price points:<br></br>

        - Too Cheap: At what price would you question the quality of the product?<br></br>
        - Bargain: At what price would you consider the product a good value?<br></br>
        - Expensive: At what price would the product start to feel pricey?<br></br>
        - Prohibitive: At what price would the product be too expensive, making it unaffordable?<br></br>
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina">
        <p className="text-2xl -mb-3"><b>Impact on Product Competitive Pricing Analysis</b></p><br/>
        By identifying these price points, you can gain valuable insights into how your target audience perceives your product's value. This knowledge enables you to position your product effectively in the market, always optimizing your pricing strategy to stay competitive.
        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina">
        <p className="text-2xl -mb-3"><b>Key Benefits of the VAN WESTERN Model</b></p><br/>
        1. Identifies Market Gaps: By analyzing competitors' pricing strategies through the VAN WESTERN lens, you can spot gaps in the market where your product can fill the void.<br></br>
        2. Optimizes Pricing: Understanding consumer perceptions of price and quality helps you set a competitive price that resonates with your target audience.<br></br>
        3. Enhances Positioning: The VAN WESTERN model enables you to position your product as a premium offering, a value option, or somewhere in between, depending on your target market's preferences.<br></br>
        4. Informs Product Development: Insights from the VAN WESTERN analysis can guide product development, ensuring your offerings meet consumer expectations and align with their perceived value.<br></br>

        </p>

        <p className="text-sm mb-3 mt-10 text-gray-500 font-pp-neue-machina">
        <p className="text-2xl -mb-3"><b>Conclusion</b></p><br/>
        In conclusion, the VAN WESTERN pricing model is a powerful tool for competitive analysis, helping you know your consumer perceptions and pricing strategies. By executing this model, you can refine your pricing approach, strengthen your market position, and drive business success.
        </p>

        </div>
        <div className="p-8 lg:pr-0 lg:py-28 sm:-mt-28 md:mt-0 font-pp-neue-machina">
        <div className="flex self-start mb-12">
        <img
            src={Heroimage}
            alt="hero"
            className="w-24 md:w-36 object-cover rounded-none min-h-24 max-h-24 md:max-h-36 md:min-h-36"
          />
          <p className="flex items-center lg:px-8 p-4"><Link to="/blog1"><b>Web 3.0: Evolution of Digital Marketing</b></Link></p>
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

        </div>
        </div>
    )
}
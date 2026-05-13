import React from "react";
import { ContactCard } from "../../components/ui/ContactCard";
import SocialProfile from "./SocialProfile";


const ContactText = () => {
  return (
    <div className="space-y-5">

    <div className="text-center">
      
      <h2 className="text-[48px] w-[278px] md:text-[50px] md:w-[90%] mx-auto lg:text-3xl font-bold mt-6 leading-[48px]">
        Let's Create Something{" "}
        <span className="gradient-text-header">Amazing</span>
      </h2>
      <p className="text-[#99A1AF] text-[18px] font-[400] leading-[29.25px] mt-4 max-w-[269px] md:max-w-full mx-auto">
        Have a project in mind? Let's discuss how we can bring your vision to
        life
      </p>
    </div>
      <ContactCard />
      <h3 className="text-[18px] leading-[28px] tracking-normal font-bold ">Follow Me</h3>
      <SocialProfile/>
      <div className="bg-gradient-to-r from-[#11324A] to-[#3D1A3B] w-[95%] rounded-[19px] flex justify-center items-center h-[255.9px]">
        <header className="contact-gradient-text text-center gap-[16px] flex flex-col">
          <h4 className="font-bold text-[60px] leading-[60px] tracking-normal ">Let's Talk</h4>
          <p className="text-[#99A1AF]  ">Open to new Opportunities</p>
        </header>
      </div>
    </div>
  );
};

export default ContactText;

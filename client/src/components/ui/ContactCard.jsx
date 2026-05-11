import React from "react";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
} from "../../assets/Icons/index.js";

export const ContactCard = () => {
  const contactItems = [
    {
      id: 1,
      type: "email",
      label: "Email",
      value: "sackeydavid063@gmail.com",
      icon: EmailIcon,
      bgColor: " bg-gradient-to-r from-[#00B8DB]/50 to-[#2B7FFF]/50",
    },
    {
      id: 2,
      type: "phone",
      label: "Phone",
      value: "+234 905 585 4282",
      icon: PhoneIcon,
      bgColor: " bg-gradient-to-r from-[#2B7FFF]/50 to-[#AD46FF]/50",
    },
    {
      id: 3,
      type: "location",
      label: "Location",
      value: "Lagos, Nigeria",
      icon: LocationIcon,
      bgColor: " bg-gradient-to-r from-[#AD46FF]/50 to-[#F6339A]/50",
    },
  ];

  return (
    <>
      {contactItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className=" border-[#FFFFFF1A] border-[1.18px] rounded-[16px]  shadow-sm  flex  opacity-md items-center py-9 mt-4 gap-[16.75px] pl-[25.12px] "
          >
            <div
              className={`w-[55.9px]  h-[55.9px] rounded-[14px] ${item.bgColor} items-center flex justify-center`}
            >
              <IconComponent />
            </div>
            <div className="">
              <h2 className="card-title text-[#99A1AF] leading-[20px] text-[14px] tracking-normal font-[400] ">
                {item.label}
              </h2>
              <p>{item.value}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

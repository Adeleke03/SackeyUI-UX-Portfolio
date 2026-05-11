import React from "react";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialBehance,
} from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

const SocialProfile = () => {
  const SocialLinks = [
    {
      id: 1,
      type: "Linkedin",
      link: "https://www.linkedin.com/in/sackey-david-372b6b368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: SlSocialLinkedin,
    },
    {
      id: 2,
      type: "TwitterX",
      link: "https://x.com/iamsackey01?s=21",
      icon: RiTwitterXFill,
    },
    {
      id: 3,
      type: "Instagram",
      link: "https://www.instagram.com/designedby_sackey?igsh=ODN4M2d4OWU2NjA4&utm_source=qr",
      icon: SlSocialInstagram,
    },
    {
      id: 4,
      type: "Tiktok",
      link: "https://www.tiktok.com/@sackey_ux?_t=ZS-9089H271xkQ&_r=1",
      icon: SiTiktok,
    },
    {
      id: 5,
      type: "Behance",
      link: "https://www.behance.net/designedbysackey",
      icon: SlSocialBehance,
    },
  ];

  return (
    <div className="flex flex-row gap-4"> 
      {SocialLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[47.9px] h-[47.9px] rounded-[14px] border-[1.18px] bg-[#FFFFFF0D] px-[12.82px] border-[#FFFFFF1A] flex items-center justify-center"
          >
            <IconComponent className="text-[#99A1AF]" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialProfile;
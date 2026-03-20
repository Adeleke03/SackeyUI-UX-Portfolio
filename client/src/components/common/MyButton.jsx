import React from "react";

const MyButton = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  text = "",
  disabled = false,
}) => {
  const base = "rounded-[14px]";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#00B8DB] to-[#155DFC] text-white border-none",
    secondary: "bg-transparent",
  };
  const sizes = {
    small: "w-[40px] h-[40px] font-bold",
    medium: "h-[48px] w-[119px]",
    large: "w-[207px] h-[60px] py-[17px] px-[33px]",
  };
    const texts = {
    logotext: "S",
    navtext: "Let's Talk"
  };
  const btntext = children || (text && texts[text]) || text;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${texts[text]} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {btntext}
    </button>
  );
};

export default MyButton;

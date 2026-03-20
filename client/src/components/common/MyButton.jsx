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
    secondary: "bg-transparent border-[0.8px] border-[#00B8DB]/30",
  };
  const sizes = {
    small: "w-[40px] h-[40px] font-bold",
    medium: "h-[48px] w-[119px]",
    mediumxl: "w-[168px] h-[60px] ",
    large: "w-[207px] h-[60px] py-[17px] px-[33px]",
  };
  const texts = {
    logotext: "S",
    navtext: "Let's Talk",
    herobtntext1: "View My Work →",
    herobtntext2: "Get in Touch",
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

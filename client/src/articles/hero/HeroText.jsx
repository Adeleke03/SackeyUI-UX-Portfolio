import HeroHeader from "./ui/HeroHeader";
import HeroTheme from "./ui/HeroTheme";
import HeroStat from "./ui/HeroStat";
import HeroButton from "./ui/HeroButton";

const HeroText = () => {
  return (
    <div className="w-[553px] flex flex-col gap-[15px] ml-[33px] py-[10px]">
      <HeroTheme />
      <div className=" flex flex-col gap-[52px]">

      <HeroHeader />
      <HeroStat />
      <HeroButton />
      </div>
    </div>
  );
};

export default HeroText;

import MyButton from "../../../components/common/MyButton";

const HeroButton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 ">
      <a
        href="https://www.behance.net/designedbysackey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MyButton text="herobtntext1" size="large" className="cursor-pointer" />
      </a>
      <a
        href="https://wa.me/2349055854282"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MyButton
          text="herobtntext2"
          variant="secondary"
          size="mediumxl"
          className="cursor-pointer"
        />
      </a>
    </div>
  );
};

export default HeroButton;

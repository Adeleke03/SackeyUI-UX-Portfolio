import MyButton from "./MyButton";

export const Logo = () => {
  return (
      <div className="flex items-center">
        <MyButton text="logotext" size="small" />

        <p className="font-bold pl-[8px] text-xl leading-[28px] tracking-normal text-white">
          Sackey
        </p>
      </div>
  );
};

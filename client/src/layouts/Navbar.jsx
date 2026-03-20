import { Logo } from "../components/common/Logo";
import Pages from "../pages/Pages";
import MyButton from "../components/common/MyButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white">
      <Logo />
      <Pages  className="border-[0.8px]  bg-white/10 rounded-[16px] text-[#D1D5DC] "/>
      <MyButton
        text="navtext"
        className="text-regular-style"
      />
    </nav>
  );
};

export default Navbar;

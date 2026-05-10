import { Logo } from "../components/common/Logo";
import Pages from "../pages/Pages";
import MyButton from "../components/common/MyButton";
import Icon from "../assets/Icon.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <>
      <nav className=" hidden lg:flex justify-between items-center text-white">
        <Logo />
        <Pages className="border-[0.8px]  bg-white/10 rounded-[16px] text-[#D1D5DC] justify-around" />
        <MyButton
          text="navtext"
          className="text-regular-style cursor-pointer"
          onClick={() => window.open("https://wa.me/2349055854282", "_blank")}
        />
      </nav>
      <nav className="lg:hidden flex justify-between items-center text-white border-b-[1.18px] border-[#FFFFFF1A] overflow-x-hidden">
        <Logo />
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn w-[40px] h-[40px] rounded-[14px] bg-white/5 border-[1.18px] border-white/10 items-center flex-col flex justify-center "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <img src={Icon} />
        </button>
        <dialog
          id="my_modal_3"
          className="modal top-11 w-[319.5px] h-[370px] rounded-[16px] mx-auto bg-[#FFFFFF0D] backdrop-blur-md border-[1.18px] border-white/10 text-[#D1D5DC]"
        >
          <div className="modal-box flex flex-col justify-around p-3">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-[1.18px] border-white/10 items-center flex-col flex justify-center mx-auto bg-[#FFFFFF0D] w-[40px] h-[40px] rounded-[14px]">
                ✕
              </button>
            </form>
            <ul className="flex flex-col justify-around h-[300px] pl-5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <AnchorLink href="#About">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#Skills">Skills</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#Projects">Projects</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#Contact">Contact</AnchorLink>
              </li>
            </ul>
            <MyButton
              text="navtext"
              className="text-regular-style w-full "
              onClick={() =>
                window.open("https://wa.me/2349055854282", "_blank")
              }
            />
          </div>
        </dialog>
      </nav>
    </>
  );
};

export default Navbar;

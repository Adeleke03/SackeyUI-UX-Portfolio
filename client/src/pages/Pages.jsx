const Pages = ({ className = '' }) => {
  return (
    <ul className={`flex flex-col lg:flex-row items-center lg:w-[530px] lg:h-[57px] justify-around ${className}`}>
      <li><a href="/">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Skills">Skills</a></li>
      <li><a href="#Projects">Projects</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>
  );
};

export default Pages;
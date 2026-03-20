const Pages = ({ excludeItems = [], className='' }) => {
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <ul className={`flex  items-center w-[530px] h-[57px]  justify-around  ${className}`}>
      {menuItems
        .filter((item) => !excludeItems.includes(item))
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  );
};

export default Pages;

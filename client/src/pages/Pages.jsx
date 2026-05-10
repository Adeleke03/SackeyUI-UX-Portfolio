import AnchorLink from "react-anchor-link-smooth-scroll";

const Pages = ({ className = "", excludeItems = [] }) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#About" },
    { label: "Skills", href: "#Skills" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
  ];

  const filteredLinks = links.filter(
    (link) => !excludeItems.includes(link.label),
  );

  return (
    <ul
      className={`flex flex-row items-center lg:w-132.5 lg:h-14.25  ${className}`}
    >
      {filteredLinks.map((link) => (
        <li key={link.label}>
          {link.href.startsWith("#") ? (
            <AnchorLink href={link.href}>{link.label}</AnchorLink>
          ) : (
            <a href={link.href}>{link.label}</a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Pages;

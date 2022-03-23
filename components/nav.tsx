interface MenuData {
  href: string;
  menuIndex: string;
  menuItem: string;
}

const NavItem: React.FunctionComponent<MenuData> = (props: MenuData) => {
  return (
    <li className="active">
      <a
        className="ff-sans-cond uppercase text-white letter-spacing-2"
        href={props.href}
      >
        <span>{props.menuIndex}</span>
        {props.menuItem}
      </a>
    </li>
  );
};

const Nav: React.FunctionComponent = () => {
  const menuData: MenuData[] = [
    {
      href: "index.html",
      menuIndex: "00",
      menuItem: "Home",
    },
    {
      href: "destination.html",
      menuIndex: "01",
      menuItem: "Destination",
    },
    {
      href: "crew.html",
      menuIndex: "02",
      menuItem: "Crew",
    },
    {
      href: "technology.html",
      menuIndex: "03",
      menuItem: "Technology",
    },
  ];

  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
        {menuData.map((item) => (
          <NavItem
            href={item.href}
            menuIndex={item.menuIndex}
            menuItem={item.menuItem}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

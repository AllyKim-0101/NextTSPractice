import { useEffect, useState } from "react";
import { menuData } from "../../constants/constants";
import HelloPage from "../../pages/destination";
import NavItem from "./subcomponents/navItem";

export interface MenuData {
  href: string;
  menuIndex: string;
  menuItem: string;
}

const Nav: React.FunctionComponent = () => {
  // Set the state for the value of menuData
  const [navItems, setNavItems] = useState([]);

  // API Call for getting the menu
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((result) => {
        setNavItems(result);
      });
  }, []);

  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
        {navItems.map((item: MenuData) => (
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

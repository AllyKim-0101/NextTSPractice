import { menuData } from "../../constants/constants";
import NavItem from "./subcomponents/navItem";

export interface MenuData {
  href: string;
  menuIndex: string;
  menuItem: string;
}

const Nav: React.FunctionComponent = () => {
  // API Call for getting the menu

  // Set the state for the value of menuData

  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
        {menuData.map((item: MenuData) => (
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

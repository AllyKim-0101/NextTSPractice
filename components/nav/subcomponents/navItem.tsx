export interface MenuData {
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

export default NavItem;

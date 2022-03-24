import Link from "next/link";

export interface MenuData {
  href: string;
  menuIndex: string;
  menuItem: string;
}

const NavItem: React.FunctionComponent<MenuData> = (props: MenuData) => {
  return (
    <li className="active">
      <Link href={props.href}>
        <a className="ff-sans-cond uppercase text-white letter-spacing-2">
          <span>{props.menuIndex}</span>
          {props.menuItem}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;

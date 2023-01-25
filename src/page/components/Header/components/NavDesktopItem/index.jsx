import { NavLink } from "./style";

export function NavDesktopItem({ link, path }) {
  return (
    <li>
      <NavLink href={path}>{link}</NavLink>
    </li>
  )
}
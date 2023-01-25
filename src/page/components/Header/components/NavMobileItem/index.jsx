import { NavLink } from "./style";

export function NavMobileItem({ link, path, close}) {
    
    var closeMenu = () => {
        close(false)
    }

  return (
    <li>
      <NavLink href={path} onClick={closeMenu}>{link}</NavLink>
    </li>
  )
}
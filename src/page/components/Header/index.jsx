import { useState } from "react"

import Logo from "../../../assets/logo.png"
import Hamburger from 'hamburger-react'

import { HeaderContainer, MobileButton, NavDesktopContainer, NavMobileContainer } from "./style"
import { NavDesktopItem } from "./components/NavDesktopItem"
import { NavMobileItem } from "./components/NavMobileItem"

const NavLinks = [
    { link: 'Sobre Nós', path: '#sobre' },
    { link: 'Serviços', path: '#serviços' },
    { link: 'Contato', path: '#contato' },
]

export function Header() {
    const [isOpen, setOpen] = useState(false)

    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="logo" />

                <nav>
                    <NavDesktopContainer>
                        {NavLinks.map(({ link, path }) => (
                            <NavDesktopItem key={path} link={link} path={path} />
                        ))}
                    </NavDesktopContainer>
                </nav>

                <MobileButton>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </MobileButton>
            </div>

            {isOpen ? (
                <NavMobileContainer>
                    {NavLinks.map(({ link, path }) => (
                        <NavMobileItem key={path} link={link} path={path} close={setOpen}/>
                    ))}
                </NavMobileContainer>
            ) : (
                ''
            )}

        </HeaderContainer>
    )
}
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0rem 2rem;
  > div {
    max-width: 79rem;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0px;
  }
`;

export const NavDesktopContainer = styled.ul`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavMobileContainer = styled.ul`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
`;

export const MobileButton = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    .hamburger-react {
      color: ${({ theme }) => theme.colors["base-background"]};
    }
  }
`;

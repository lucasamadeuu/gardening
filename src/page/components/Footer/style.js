import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors[`main`]};
  padding-bottom: 1rem;

  @media (max-width: 1000px) {
    padding-bottom: .3rem;
  }
  `;

export const ContentContainer = styled.div`
  display: flex;
  padding: 7rem 10rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 4rem 2rem;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CreditsContainer = styled.div`
  margin:  0 auto;
  cursor: pointer;
`;

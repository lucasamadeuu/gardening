import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 1000px) {
    gap: 4rem;
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    width: 60%;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors[`${color}`]};
  width: 114px;
  height: 114px;
  border-radius: 15px;
  > img {
    width: 40%;
  }
`;

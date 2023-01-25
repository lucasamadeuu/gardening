import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors[`main`]};
  padding: 4rem 10rem;
  display: flex;
  gap: 5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4rem 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  > img {
    width: 25rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4rem;
  padding-bottom: 1rem;
`;

export const TextContainerSplit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

import styled from "styled-components";

export const TextsContainer = styled.div`
  color: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2rem 20rem;
  gap: 4rem;
  padding-top: 5%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > p {
      padding: 0 10rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 25% 2rem 2rem 2rem;

    > div {
      > p {
        padding: 0;
      }
      > h1 {
        font-size: ${({ theme }) => theme.textSizes["title-l"]};
      }
    }
  }
`;

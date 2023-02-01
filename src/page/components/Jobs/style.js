import styled from "styled-components";

export const JobsContainer = styled.div`
  padding: 0 10rem;

  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;

  > h1 {
    width: 30%;
  }

  > div {
    display: flex;
    gap: 2rem;

    > a {
      width: 30%;
      > img {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    > h1 {
      width: 100%;
      text-align: center;
    }
  }
`;

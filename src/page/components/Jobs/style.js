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

export const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  float: left;
  padding-bottom: 10rem;

  > img {
    width: 550px;
    height: 280px;
  }

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 1000px) {
    overflow-x: scroll;
  }
`;

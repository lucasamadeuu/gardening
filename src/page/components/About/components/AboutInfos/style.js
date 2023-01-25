import styled from "styled-components";

export const AboutInfoContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    width: 50%;
  }

  @media (max-width: 1000px) {
    width: 30%;
    > p {
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
`;

export const ContactInfoContainer = styled.div`
  > a {
    > img {
      width: 30px;
    }
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

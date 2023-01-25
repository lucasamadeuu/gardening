import styled from "styled-components";
import Intro from "../../../assets/intro.png";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Intro});
  background-size: cover;
  height: 100vh;
`;

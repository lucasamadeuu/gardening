import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12rem 0px;
  overflow-x: hidden;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8rem;

  @media(max-width: 1000px) {
    padding: 0 2rem;
  }
`
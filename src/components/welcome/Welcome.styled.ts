import styled from "styled-components";
import bg from "../../assets/pexels-alexandr-podvalny-1227513.jpeg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 650px;
  width: 100%;
  
  margin: 0 auto;
  
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg});
  background-size: cover;

  @media (min-width: calc(1170px + 120px)) {
    max-width: 1170px;
  }

  @media (max-width: 768px) {
    height: 500px;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 380px;
  margin: 40px 16px;
`

export const Title = styled.h1`
  font-size: ${props => props.theme.typography.heading1.size};
  line-height: ${props => props.theme.typography.heading1.lineheight};
  font-weight: normal;
  text-align: center;

  color: ${props => props.theme.palette.white};

  margin: 0 0 21px 0;
`

export const Text = styled.p`
  font-size: ${props => props.theme.typography.body.size};
  line-height: ${props => props.theme.typography.body.lineheight};
  text-align: center;

  color: ${props => props.theme.palette.white};

  margin-bottom: 32px;
`
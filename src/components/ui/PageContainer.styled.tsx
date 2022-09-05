import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  //calc for a smooth transition
  @media (max-width: calc(1170px + 120px)) {
    margin: 0 60px 0 60px;
  }

  @media (max-width: calc(768px + 64px)) {
    margin: 0 32px 0 32px;
  }

  @media (max-width: calc(360px + 32px)) {
    margin: 0 16px 0 16px;
  }
`;

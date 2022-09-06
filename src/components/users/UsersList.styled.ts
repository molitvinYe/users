import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 29px;

  width: 100%;
  margin-bottom: 50px;
  padding: 0;

  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
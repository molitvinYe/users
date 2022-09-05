import styled from "styled-components";

export const LinkButton = styled.a`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 34px;
  width: 100px;

  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.black};

  border-radius: ${props => props.theme.borderRadius.buttons};

  &:hover {
    background-color: ${props => props.theme.palette.button.hover};
  }
`
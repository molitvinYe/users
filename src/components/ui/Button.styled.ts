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

export const Button = styled.button<{isBig?: boolean}>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 34px;
  width: ${props => props.isBig ? "120px" : "100px"};

  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.black};

  border: none;
  border-radius: ${props => props.theme.borderRadius.buttons};

  margin: 0 auto;

  &:hover {
    background-color: ${props => props.theme.palette.button.hover};
  }

  &:disabled,
  &[disabled]{
    color: ${props => props.theme.palette.white};
    background-color: ${props => props.theme.palette.button.disabled};
  }
`
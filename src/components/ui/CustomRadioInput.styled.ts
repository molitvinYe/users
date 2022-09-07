import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & + & {
    margin-top: 13px;
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.palette.fields.border};
  position: relative;
`

export const Radio = styled.input`
  position: absolute;
  height: 0px;
  width: 0px;
  opacity: 0;

  &:checked + ${Label} ${Circle}::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.secondary};
  }

  &:checked + ${Label} ${Circle} {
    border: 1px solid ${props => props.theme.palette.secondary};
  }
`

export const Text = styled.span`
  margin-left: 12px;
`
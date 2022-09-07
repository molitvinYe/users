import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  height: 54px;
`

export const Input = styled.input<{isError: boolean}>`
  width: 100%;
  height: 100%;

  border-radius: ${prosp => prosp.theme.borderRadius.fields};
  border: 1px solid ${props => props.isError 
    ? props.theme.palette.fields.error 
    : props.theme.palette.fields.border};

  background-color: inherit;
  color: ${props => props.theme.palette.black};

  box-sizing: border-box;
  padding: 14px 16px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.palette.fields.text};
  }
`

export const Title = styled.span<{isError: boolean}>`
  position: absolute;
  top: 0;
  left: 16px;
  transform: translateY(-50%);

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  box-sizing: border-box;
  padding: 0 4px;

  color: ${props => props.isError 
    ? props.theme.palette.fields.error 
    : props.theme.palette.fields.text};

  background-color: ${props => props.theme.palette.bg};
`

export const HelperText = styled.span<{isError: boolean}>`
  position: absolute;
  bottom: -4px;
  left: 16px;
  transform: translateY(100%);

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  color: ${props => props.isError 
    ? props.theme.palette.fields.error 
    : props.theme.palette.fields.text};
`
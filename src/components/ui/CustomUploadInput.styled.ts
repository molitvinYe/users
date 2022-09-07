import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 50px;
`

export const Upload = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`

export const Label = styled.label`
  display: flex;
  width: 100%;
  height: 54px;

  cursor: pointer;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 83px;

  border: 1px solid ${props => props.theme.palette.black};
  border-top-left-radius: ${props => props.theme.borderRadius.fields};
  border-bottom-left-radius: ${props => props.theme.borderRadius.fields};
  
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  overflow: hidden;

  color: ${props => props.theme.palette.fields.text};
  border: 1px solid ${props => props.theme.palette.fields.border};
  border-top-right-radius: ${props => props.theme.borderRadius.fields};
  border-bottom-right-radius: ${props => props.theme.borderRadius.fields};
`
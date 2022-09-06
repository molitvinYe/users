import styled from "styled-components";
import { ITooltip } from "../../models/ITooltip";

export const Tooltip = styled.span<{pageX: number, pageY: number}>`
  position: fixed;
  top: calc(${props => props.pageY}px + 24px);
  left: ${props => props.pageX}px;
  
  border-radius: ${props => props.theme.borderRadius.fields};
  background-color: ${props => props.theme.palette.black};
  color: ${props => props.theme.palette.white};
  padding: 3px 16px;
`
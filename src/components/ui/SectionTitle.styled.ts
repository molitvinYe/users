import styled from "styled-components";

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.typography.heading1.size};
  line-height: ${props => props.theme.typography.heading1.lineheight};
  font-weight: normal;
  margin: 0 0 50px 0;
  color: ${props => props.theme.palette.black};
`
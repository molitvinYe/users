import styled from "styled-components"

export const Name = styled.h3`
  margin: 0 0 20px 0;
  text-align: center;
  font-size: ${props => props.theme.typography.body.size};
  line-height: ${props => props.theme.typography.body.lineheight};
  font-weight: normal;
  color: ${props => props.theme.palette.black};
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  text-align: center;
  word-wrap: break-word;

  font-size: ${props => props.theme.typography.body.size};
  line-height: ${props => props.theme.typography.body.lineheight};
  color: ${props => props.theme.palette.black};

  a {
    cursor: pointer;

    color: inherit;
    text-decoration: none;
  }
`

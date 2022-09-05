import styled from "styled-components";

export const Card = styled.li`
  height: 254px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius.cards};
  background-color: ${props => props.theme.palette.white};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px
  }
`

export const ImageContainer = styled.div`
  height: 70px;
  width: 70px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const Name = styled.h3`
  margin: 0 0 20px 0;
  text-align: center;
  font-size: ${props => props.theme.typography.body.size};
  line-height: ${props => props.theme.typography.body.lineheight};
  font-weight: normal;
  color: ${props => props.theme.palette.black};
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  text-align: center;
  font-size: ${props => props.theme.typography.body.size};
  line-height: ${props => props.theme.typography.body.lineheight};
  color: ${props => props.theme.palette.black};
`
import styled from "styled-components";

export const Card = styled.li`
  overflow: auto;
  box-sizing: border-box;

  height: 254px;
  padding: 15px;

  border-radius: ${props => props.theme.borderRadius.cards};
  background-color: ${props => props.theme.palette.white};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  padding: 5px;

  &::-webkit-scrollbar {
    width: 0px;
  }
`
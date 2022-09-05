import styled from "styled-components";
import {ReactComponent as LogoSvg} from '../../assets/Logo.svg'

export const Wrapper = styled.header`
  background-color: ${props => props.theme.palette.bg};
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0;
`

export const Logo = styled(LogoSvg)`
  height: 26px;
  width: 104px;
`

export const Navigation = styled.nav`
  display: flex;

  a + a {
    margin-left: 10px;
  }
`
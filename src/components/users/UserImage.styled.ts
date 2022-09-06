import styled from "styled-components";
import {ReactComponent as DefaultImageIcon} from '../../assets/photo-cover.svg'

export const ImageContainer = styled.div`
  height: 70px;
  width: 70px;
  margin-bottom: 20px;

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export const DefaultImage = styled(DefaultImageIcon)`
  object-fit: cover;
  
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
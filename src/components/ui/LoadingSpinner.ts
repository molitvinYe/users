import styled from "styled-components";

export const LoadingSpinner = styled.div`
  height: 48px;
  width: 48px;
  border: 4px solid ${props => props.theme.palette.secondary};
  border-radius: 50%;
  margin: 0 auto;
  border-top: 4px solid transparent;
  position: relative;
  animation: load 1s infinite linear;

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &::before,
  &::after
   {
    content: "";
    position: absolute;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color:${props => props.theme.palette.secondary};

  }

  &::before {
    top: 3px;
    left: 4px;
  }

  &::after {
    top: 3px;
    right: 4px;
  }
`
import React from "react";
import { LinkButton } from "../ui/Button.styled";
import { PageContainer } from "../ui/PageContainer.styled";
import { Wrapper, Body, Logo, Navigation } from "./Header.styled";

const Header = () => {
  return (
    <Wrapper>
      <PageContainer>
        <Body>
          <Logo />
          <Navigation>
            <LinkButton to="users" smooth={true}>
              Users
            </LinkButton>
            <LinkButton to="signup" smooth={true}>
              Sign up
            </LinkButton>
          </Navigation>
        </Body>
      </PageContainer>
    </Wrapper>
  );
};

export default Header;

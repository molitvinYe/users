import React, { useState } from "react";
import { PageWrapper } from "./components/ui/PageWrapper.styled";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
const Users = React.lazy(() => import("./components/users/Users"));
const SignUp = React.lazy(() => import("./components/signup/SignUp"));

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Welcome />
      <Users />
      <SignUp />
    </PageWrapper>
  );
};

export default App;

import React, { useState } from "react";
import { PageWrapper } from "./components/ui/PageWrapper.styled";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
//import Users from "./components/users/Users";
import SignUp from "./components/signup/SignUp";
const Users = React.lazy(() => import("./components/users/Users"));

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

import { PageWrapper } from "./components/ui/PageWrapper.styled";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Users from "./components/users/Users";

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Welcome />
      <Users />
    </PageWrapper>
  );
};

export default App;

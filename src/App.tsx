import { PageWrapper } from "./components/ui/PageWrapper.styled";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Welcome />
    </PageWrapper>
  );
};

export default App;

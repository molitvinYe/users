import { LinkButton } from "../ui/Button.styled";
import { Section, Body, Title, Text } from "./Welcome.styled";

const Welcome = () => {
  return (
    <Section>
      <Body>
        <Title>Test assignment for front-end developer</Title>
        <Text>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <LinkButton to="signup" smooth={true} href="#signup">
          Sign up
        </LinkButton>
      </Body>
    </Section>
  );
};

export default Welcome;

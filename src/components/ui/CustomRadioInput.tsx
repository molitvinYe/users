import Reac, { useState, useEffect } from "react";
import {
  Container,
  Radio,
  Label,
  Circle,
  Text,
} from "./CustomRadioInput.styled";

interface CustomRadioInputTypes {
  id: string;
  name: string;
  value: string;
  getValue(value: string): void;
}

const CustomRadioInput: React.FC<CustomRadioInputTypes> = ({
  id,
  name,
  value,
  getValue,
}) => {
  return (
    <Container>
      <Radio
        type="radio"
        name={name}
        value={id}
        id={id}
        onChange={() => {
          getValue(id);
        }}
      />
      <Label htmlFor={id}>
        <Circle className="circle"></Circle>
        <Text className="text">{value}</Text>
      </Label>
    </Container>
  );
};

export default CustomRadioInput;

import React, { useState, useEffect } from "react";
import { Container, HelperText, Input, Title } from "./CustomInput.styled";

interface InputTypes {
  placeholder: string;
  type: string;
  id: string;
  helperText?: string;
  errorMassage: string;
  isValid(value: string): boolean;
  getValue(key: string, value: string | null): void;
}

const CustomInput: React.FC<InputTypes> = ({
  placeholder,
  type,
  id,
  helperText,
  errorMassage,
  isValid,
  getValue,
}) => {
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (!isTouched) return;
    const writingTime = setTimeout(() => {
      const isValueValid = isValid(value);
      if (isValueValid) {
        setIsError(false);
        getValue(id, value);
      } else {
        setIsError(true);
        getValue(id, null);
      }
    }, 500);
    return () => clearTimeout(writingTime);
  }, [value, isTouched]);

  const changeHandler = (event: React.ChangeEvent) => {
    const current = event.target as HTMLInputElement;
    let currentValue = current.value;

    if (!isTouched && currentValue) setIsTouched(true);

    if (id === "phone" && currentValue[0] === "0") {
      currentValue = currentValue.replace(currentValue[0], "+380");
    }

    setValue(currentValue);
  };

  return (
    <Container>
      {value && <Title isError={isError}>{placeholder}</Title>}
      <Input
        type={type}
        placeholder={placeholder}
        isError={isError}
        onChange={changeHandler}
        value={value}
      />
      {(helperText || isError) && (
        <HelperText isError={isError}>
          {isError ? errorMassage : helperText}
        </HelperText>
      )}
    </Container>
  );
};

export default CustomInput;

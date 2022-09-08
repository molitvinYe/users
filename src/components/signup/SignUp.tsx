import React, { useState, useEffect } from "react";
import { Section, Form } from "./SignUp.styled";
import { SectionTitle } from "../ui/SectionTitle.styled";
import { Button } from "../ui/Button.styled";
import CustomInput from "../ui/CustomInput";
import SelectPosition from "./SelectPosition";
import { emailExp, phoneExp } from "../../store/expressions";
import CustomUploadInput from "../ui/CustomUploadInput";
import { usersAPI } from "../../services/UsersService";
import { pageSlice } from "../../store/reducers/PageSlice";
import { useAppDispatch } from "../../hooks/redux";
import successImage from "../../assets/success-image.svg";
import * as Scrool from "react-scroll";
import { LoadingSpinner } from "../ui/LoadingSpinner";

interface defaultFormData {
  name: string | null;
  email: string | null;
  phone: string | null;
  position_id: number | null;
  photo: File | null;
}

const SignUp = () => {
  const [formData, setFormData] = useState<defaultFormData>({
    name: null,
    email: null,
    phone: null,
    position_id: null,
    photo: null,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [postUser, { isSuccess, isLoading, error }] =
    usersAPI.usePostUserMutation();
  const { startPage } = pageSlice.actions;
  const dispatch = useAppDispatch();
  const { data: token } = usersAPI.useGetTokenQuery(null);

  useEffect(() => {
    setIsDisabled(Object.values(formData).includes(null));
  }, [formData]);

  useEffect(() => {
    if (!isSuccess) return;
    const usersElement = document.getElementById("users") as HTMLElement;

    usersElement.scrollIntoView({ behavior: "smooth" });
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      const currentError = error as {
        data: { message: string; success: boolean };
        status: number;
      };
      alert(currentError.data.message);
    }
  }, [error]);

  const setValue = (key: string, value: any) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value);
    });
    if (token?.success) {
      dispatch(startPage());
      postUser({ token: token.token, body });
    }
  };

  return (
    <Section id="signup">
      <SectionTitle>
        {isSuccess
          ? "User successfully registered"
          : "Working with POST request"}
      </SectionTitle>
      {isSuccess ? (
        <img src={successImage} />
      ) : (
        <Form onSubmit={submitHandler}>
          <CustomInput
            type="text"
            placeholder="Your name"
            id="name"
            errorMassage="dont correct"
            isValid={(value) => value.length >= 2}
            getValue={setValue}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            id="email"
            errorMassage="dont correct"
            isValid={(value) => (value.match(emailExp) ? true : false)}
            getValue={setValue}
          />
          <CustomInput
            type="text"
            placeholder="Phone"
            id="phone"
            errorMassage="dont correct"
            helperText="+380XXXXXXXX"
            isValid={(value) =>
              value.match(phoneExp) && value.length === 13 ? true : false
            }
            getValue={setValue}
          />
          <SelectPosition getValue={setValue} />
          <CustomUploadInput
            id="user-upload-photo"
            objKey="photo"
            getValue={setValue}
          />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button disabled={isDisabled}>Sign up</Button>
          )}
        </Form>
      )}
    </Section>
  );
};

export default SignUp;

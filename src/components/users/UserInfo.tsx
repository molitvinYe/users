import React from "react";
import { Name, List, Item } from "./UserInfo.styled";
import UserEmail from "./UserEmail";

interface UserInfoTypes {
  name: string;
  position: string;
  email: string;
  phone: string;
}

const UserInfo: React.FC<UserInfoTypes> = (props) => {
  return (
    <>
      <Name>{props.name}</Name>
      <List>
        <Item>{props.position}</Item>
        <Item>
          <UserEmail email={props.email} />
        </Item>
        <Item>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </Item>
      </List>
    </>
  );
};

export default UserInfo;

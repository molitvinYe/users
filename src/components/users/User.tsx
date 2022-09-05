import React from "react";
import { IUser } from "../../models/IUsers";
import { Body, ImageContainer, Card, Name, List, Item } from "./User.styled";

const User: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <Card>
      <Body>
        <ImageContainer>
          <img src={user.photo} />
        </ImageContainer>
        <Name>{user.name}</Name>
        <List>
          <Item>{user.position}</Item>
          <Item>{user.email}</Item>
          <Item>{user.phone}</Item>
        </List>
      </Body>
    </Card>
  );
};

export default User;

import React, { useState } from "react";
import { IUser } from "../../models/IUsers";
import { Body, Card } from "./User.styled";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";

const User: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <Card>
      <Body>
        <UserImage photo={user.photo} />
        <UserInfo
          name={user.name}
          position={user.position}
          email={user.email}
          phone={user.phone}
        />
      </Body>
    </Card>
  );
};

export default User;

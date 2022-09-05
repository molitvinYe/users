import React, { useState, useEffect } from "react";
import { usersAPI } from "../../services/UsersService";
import { IUser } from "../../models/IUsers";
import { Section, Body, List } from "./Users.styled";
import User from "./User";
import { PageContainer } from "../ui/PageContainer.styled";
import { SectionTitle } from "../ui/SectionTitle.styled";

const Users = () => {
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>([]);
  const { data } = usersAPI.useFetchAllUsersQuery(page);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  return (
    <Section>
      <PageContainer>
        <Body>
          <SectionTitle>Working with GET request</SectionTitle>
          <List>
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </List>
        </Body>
      </PageContainer>
    </Section>
  );
};

export default Users;

import React, { useState, useEffect } from "react";
import { usersAPI } from "../../services/UsersService";
import { IUser } from "../../models/IUsers";
import { Section, Body, List } from "./Users.styled";
import User from "./User";
import { PageContainer } from "../ui/PageContainer.styled";
import { SectionTitle } from "../ui/SectionTitle.styled";
import { Button } from "../ui/Button.styled";

const Users = () => {
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>([]);
  const { data } = usersAPI.useFetchAllUsersQuery(page);

  useEffect(() => {
    if (data) {
      setUsers((prev) => prev.concat(data.users));
    }
  }, [data]);

  const setNextPage = () => setPage((prev) => prev + 1);

  return (
    <Section>
      <PageContainer>
        <Body>
          <SectionTitle>Working with GET request</SectionTitle>
          <List>
            {users.length !== 0 &&
              users.map((user) => <User key={user.id} user={user} />)}
          </List>
          {page !== data?.total_pages && (
            <Button isBig={true} onClick={setNextPage}>
              Show more
            </Button>
          )}
        </Body>
      </PageContainer>
    </Section>
  );
};

export default Users;

import React, { useState, useEffect } from "react";
import { usersAPI } from "../../services/UsersService";
import { IUser } from "../../models/IUsers";
import { Section, Body, List } from "./Users.styled";
import User from "./User";
import { PageContainer } from "../ui/PageContainer.styled";
import { SectionTitle } from "../ui/SectionTitle.styled";
import { Button } from "../ui/Button.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { pageSlice } from "../../store/reducers/PageSlice";

const Users = () => {
  const page = useAppSelector((state) => state.pageReducer.page);
  console.log(page);
  const { nextPage } = pageSlice.actions;
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<IUser[]>([]);
  const { data } = usersAPI.useFetchAllUsersQuery(page);

  useEffect(() => {
    if (data) {
      if (data.page === 1) {
        setUsers(data.users);
        return;
      }

      if (data.page === page) {
        setUsers((prev) => prev.concat(data.users));
        return;
      }
    }
  }, [data]);

  const setNextPage = () => dispatch(nextPage());

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

import React, { useState, useEffect } from "react";
import { List } from "./UsersList.styled";
import { usersAPI } from "../../services/UsersService";
import User from "./User";
import { IUser } from "../../models/IUsers";

const UsersList: React.FC<{ page: number }> = ({ page }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { data } = usersAPI.useFetchAllUsersQuery(page);

  useEffect(() => {
    if (data) setUsers(data.users);
  }, [data]);

  return (
    <List>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </List>
  );
};

export default UsersList;

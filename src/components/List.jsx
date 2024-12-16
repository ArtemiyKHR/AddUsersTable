import React from "react";
import ListItem from "./ListItem";

const List = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <ListItem number={index + 1} user={user} key={user.id} />
      ))}
    </div>
  );
};

export default List;

import React from "react";
import MyButton from "./UI/MyButton/MyButton";
import "../styles/ListItem.css";

const ListItem = (props) => {
  return (
    <div className="list__item">
      <div className="list__itemContent">
        <span className="user_name">
          {props.number}. {props.user.name}
        </span>
        <span className="user_job">{props.user.role}</span>
      </div>
      <MyButton iconClass="user-minus">Удалить</MyButton>
    </div>
  );
};

export default ListItem;

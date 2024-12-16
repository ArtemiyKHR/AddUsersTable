import "./styles/App.css";

import MyButton from "./components/UI/MyButton/MyButton";
// import List from "./components/List";
import React, { Component } from "react";

// import { useState } from "react";
import Form from "./components/Form";

function App() {
  // const [users, setUsers] = useState([
  //     {id: 1, name: "Oleg", role: "IT"},
  //     {id: 2, name: "Artem", role: "IT"},
  //     {id: 3, name: "Kostya", role: "IT"},
  // ]);
  // const [userName, setUserName] = useState("");
  // const [userRole, setUserRole] = useState("");

  // const addNewUser = (e) => {
  //     e.preventDefault();
  //     const newUser = {
  //         id: Date.now(),
  //         name: userName,
  //         role: userRole,
  //     }
  //     setUsers([...users, newUser]);
  //     setUserName("");
  //     setUserRole("");
  //
  // }

  return (
    <div className="App">
      <div className="form">
        <span className="form__title">Добавление пользователя</span>
        <Form />
      </div>

      <header className="App-header">
        <span className="tableTitle">Таблица пользователей</span>
        <div className="btns">
          <MyButton iconClass="icon-user">Авторизация</MyButton>
          <MyButton iconClass="icon-search">Поиск</MyButton>
          <MyButton iconClass="icon-add">Добавить</MyButton>
        </div>
      </header>
      {/*<List users={users}/>*/}
    </div>
  );
}

export default App;

import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserList from "./components/UserList/UserList"
import styles from "./styles/styles.scss";

function App() {
  const [users, setUsers] = useState([])

  useEffect(async () => {
    await fetch('https://api.github.com/orgs/grupotesseract/public_members')
    .then((res) => res.json())
    .then((data) => {
    setUsers(data)
    })
  }, [])

  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <UserList users={users}/> 
    </React.Fragment>
  );

}

export default App;

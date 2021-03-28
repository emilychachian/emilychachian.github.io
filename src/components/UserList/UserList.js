import { useState, useEffect } from "react";
import { Image, List, Input } from "semantic-ui-react";
import UserCard from "../UserCard/UserCard";

export default function UserList(props) {
  const { users } = props;

  const [selectedUser, setSelectedUser] = useState("");
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(props.users);
  const [showCard, setShowCard] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }


  const handleChange = (e) => {
    let oldList = users.map((user) => {
      return user;
    });

    if (e !== "") {
      let newList = [];
      setWord(e);
      newList = oldList.filter((user) =>
        user.login.toLowerCase().includes(word.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(users);
    }
  };

  if (users) {
    return (
      <>
        <div className="search-bar">
          <Input
            placeholder="Github user"
            name="github user"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className="content-container">
          <div className="list-container">
            <List animated verticalAlign="middle">
              {filterDisplay.map((user) => (
                <List.Item
                  onClick={() => {
                    setSelectedUser(user.login)
                    setShowCard(true)
                    handleToggle();
                  }}
                  >
                  <Image src={user.avatar_url} />
                  <List.Content>
                    <List.Header>{user.login}</List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
          <div className="card-container">
            {showCard === true && <UserCard user={selectedUser} />}
          </div>
        </div>
      </>
    );
  }
}

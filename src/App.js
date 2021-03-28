import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import UserList from './components/UserList/UserList'
import styles from './styles/styles.scss'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      await fetch('https://api.github.com/orgs/grupotesseract/public_members')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data)
        })
    }

    getUsers()
  }, [])

  return (
    <React.Fragment>
      <Header />
      {users && users.length > 0 && <UserList users={users} />}
    </React.Fragment>
  )
}

export default App

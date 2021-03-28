import React, { useEffect, useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import dateFormatter from '../../utils/dateFormatter'

function UserCard({ user }) {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [repos, setRepos] = useState('')
  const [bio, setBio] = useState('')
  const [followers, setFollowers] = useState('')
  const [creationDate, setCreationDate] = useState('')

  const setUsersInfo = ({ name, avatar_url, bio, public_repos, followers, created_at }) => {
    setName(name)
    setAvatar(avatar_url)
    setRepos(public_repos)
    setFollowers(followers)
    setCreationDate(created_at)
    setBio(bio)
  }

  useEffect(async () => {
    await fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((usersInfo) => {
        setUsersInfo(usersInfo)
      })
  }, [user])

  return (
    <div className="user-card">
      <Card>
        <div className="warning">Press Esc to close</div>
        <Image src={avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in {dateFormatter(creationDate)}</span>
          </Card.Meta>
          <Card.Description>{bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {followers} followers
          </a>
          <a>{repos} Repositories</a>
        </Card.Content>
      </Card>
    </div>
  )
}

export default UserCard

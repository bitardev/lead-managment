// Component Imports
import UserList from '@views/apps/agent/list'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/agent-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
}

const UserListApp = async () => {
  // Vars
  const data = await getData()

  return <UserList userData={data} />
}

export default UserListApp

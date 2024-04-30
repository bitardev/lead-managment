// Component Imports
import UserList from '@views/apps/projet/list'

// Util Imports
import { getDictionary } from '@/utils/getDictionary'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/projet-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  console.log(res)

  return res.json()
}

const UserListApp = async ({ params }) => {
  // Vars
  const data = await getData()

  const dictionary = await getDictionary(params.lang)

  return <UserList dictionary={dictionary} userData={data} />
}

export default UserListApp

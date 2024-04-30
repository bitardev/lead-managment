// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Vars
const data = [
  {
    title: 'Agents',
    value: '10',
    avatarIcon: 'tabler-user',
    avatarColor: 'primary',
    change: 'positive',
    changeNumber: '2',
    subTitle: 'Total des agents'
  }
]

const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjetListTable from './ProjetListTable'
import ProjetListCards from './ProjetListCards'

const UserList = ({ dictionary, userData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProjetListCards />
      </Grid>
      <Grid item xs={12}>
        <ProjetListTable dictionary={dictionary} tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserList

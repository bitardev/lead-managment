// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

// Vars
const initialData = {
  fullName: '',
  username: '',
  email: '',
  company: '',
  country: '',
  contact: '',
  role: '',
  plan: '',
  status: ''
}

const AddUserDrawer = ({ open, handleClose }) => {
  // States
  const [formData, setFormData] = useState(initialData)

  const handleSubmit = e => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData({
      fullName: '',
      username: '',
      email: '',
      company: '',
      country: '',
      contact: '',
      role: '',
      plan: '',
      status: ''
    })
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between plb-5 pli-6'>
        <Typography variant='h5'>Ajouter un nouveau agent</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-6'>
          <CustomTextField
            label='Nom'
            fullWidth
            placeholder='Doe'
            value={formData.nom}
            onChange={e => setFormData({ ...formData, nom: e.target.value })}
          />
          <CustomTextField
            label='Prénom'
            fullWidth
            placeholder='John'
            value={formData.prenom}
            onChange={e => setFormData({ ...formData, prenom: e.target.value })}
          />
          <CustomTextField
            label='tel'
            fullWidth
            placeholder='(472) 607-9137'
            value={formData.tel}
            onChange={e => setFormData({ ...formData, tel: e.target.value })}
          />
          <CustomTextField
            label='Email'
            fullWidth
            placeholder='johndoe@gmail.com'
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <CustomTextField
            label='Mot de passe'
            fullWidth
            type='password'
            placeholder='********'
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <CustomTextField
            select
            fullWidth
            id='select-status'
            value={formData.status}
            onChange={e => setFormData({ ...formData, status: e.target.value })}
            label='Select Status'
          >
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>Inactive</MenuItem>
          </CustomTextField>
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Envoyer
            </Button>
            <Button variant='tonal' color='error' type='reset' onClick={() => handleReset()}>
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddUserDrawer

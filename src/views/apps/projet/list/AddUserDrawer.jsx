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
import { TextField } from '@mui/material'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

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
  status: '',
  dateDebut: new Date(),
  dateFin: new Date()
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
      status: '',
      dateDebut: new Date(),
      dateFin: new Date()
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
        <Typography variant='h5'>Ajouter un nouveau projet</Typography>
        <IconButton onClick={handleReset}>
          <i className='tabler-x text-textPrimary' />
        </IconButton>
      </div>
      <Divider />
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-6'>
          <CustomTextField
            label='Intitulé du projet'
            fullWidth
            placeholder='Pompe à chaleur'
            value={formData.fullName}
            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
          />
          <TextField
            fullWidth
            multiline
            maxRows={5}
            value={formData.username}
            label='Description'
            onChange={e => setFormData({ ...formData, username: e.target.value })}
            id='textarea-outlined-controlled'
          />
          <AppReactDatepicker
            selected={formData.dateDebut}
            id='basic-input'
            onChange={date => setFormData({ ...formData, dateDebut: date })}
            placeholderText='Date de début'
            customInput={<CustomTextField label='Date de début' fullWidth />}
          />
          <AppReactDatepicker
            selected={formData.dateFin}
            id='basic-input'
            onChange={date => setFormData({ ...formData, dateFin: date })}
            placeholderText='Date de fin'
            customInput={<CustomTextField label='Date de fin' fullWidth />}
          />
          <CustomTextField
            select
            fullWidth
            id='select-status'
            value={formData.status}
            onChange={e => setFormData({ ...formData, status: e.target.value })}
            label='Statut'
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

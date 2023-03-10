
import { Pattern } from '@mui/icons-material'
import { Grid, TextField } from '@mui/material'
import React from 'react'

export const ContactoPage = () => {
  return (
    <>
      <form>
        <Grid container>
          <Grid item 
              xs={12}
              sx={{border: '0px solid black'}}>
            <TextField 
              label="Nombre" variant='outlined' 
              placeholder='Nombre Completo'
              InputLabelProps={{
                shrink: true,
              }}
              />
          </Grid>
          <Grid item 
              xs={12}
              sx={{border: '0px solid black'}}>
            <TextField 
              label="Apellido" variant='outlined'/>
            <div>
              <TextField 
                label="Dirección" variant='outlined'/>
            </div>
            <div>
              <TextField 
                label="Dirección" variant='outlined'/>
            </div>
          </Grid>
          {/* <Grid item 
              xs={12} md={6} lg={3}
              sx={{border: '2px solid black'}}>
            <h2>Col2</h2>
          </Grid> */}
        </Grid>
      </form>
    </>
  )
}

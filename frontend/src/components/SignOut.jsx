import React from 'react'
import authn from '../services/authnService'
import Button from '@mui/material/Button'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function SignOut() {
  const remove = authn.logout()
  return (
    <Link to="/login">
      <Button
        onClick={remove}
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          bgcolor: 'primary.main',
          pt: 2,
          pb: 2,
          mt: 3,
          mb: 2,
        }}
      >
        Sign Out
      </Button>
    </Link>
  )
}
export default SignOut

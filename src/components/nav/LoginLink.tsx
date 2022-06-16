import {Link} from '@mui/material'
import React from 'react'

const LoginLink = React.memo(() => (
  <Link component={'a'} href="https://staging.studies.mobiletoolbox.org">
    <strong>Sign Up</strong>
  </Link>
))

export default LoginLink

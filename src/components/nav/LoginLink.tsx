import {Link} from '@mui/material'
import React from 'react'

const LoginLink = React.memo(() => (
  <Link component={'a'} href="https://staging.studies.mobiletoolbox.org">
    <strong>Join</strong>
  </Link>
))

export default LoginLink

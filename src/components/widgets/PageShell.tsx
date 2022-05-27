import TopNav from '@components/nav/TopNav'
import {Box} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import {colors} from '@style/theme'
import React from 'react'
import {useLocation} from 'react-router-dom'
import routes from '../../routes'

const StyledPageShell = styled(Box)<{bgcolor: string}>(({theme, bgcolor}) => ({
  width: '100%',
  bgcolor: bgcolor,
  minHeight: 'calc(100vh - 56px - 165px)',
  padding: theme.spacing(10, 0),
}))

const PageShell: React.FunctionComponent<{
  islight?: boolean
  children: React.ReactNode
}> = ({islight, children}) => {
  let location = useLocation()
  return (
    <Box>
      <TopNav routes={routes} islight={islight} />
      <StyledPageShell
        bgcolor={islight ? colors.neutralsWhite : colors.primaryBlue}>
        {children}
      </StyledPageShell>
    </Box>
  )
}

export default PageShell

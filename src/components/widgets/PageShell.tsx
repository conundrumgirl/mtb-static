import TopNav from '@components/nav/TopNav'
import {Box} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import React from 'react'
import {useLocation} from 'react-router-dom'
import routes from '../../routes'

const StyledPageShell = styled(Box)<{bgcolor: string}>(({theme, bgcolor}) => ({
  width: '100%',
  bgcolor: bgcolor,
  minHeight: 'calc(100vh - 56px - 165px)',
  padding: 0,
}))

const PageShell: React.FunctionComponent<{
  islight?: boolean
  onJoin: () => void
  children: React.ReactNode
}> = ({islight, children, onJoin}) => {
  let location = useLocation()
  return (
    <Box>
      <TopNav routes={routes} islight={islight} onJoin={onJoin} />
      <StyledPageShell bgcolor={'#FFF'}>{children}</StyledPageShell>
    </Box>
  )
}

export default PageShell

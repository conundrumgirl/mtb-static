import { ReactComponent as LogoSmall } from '@assets/mtb_logo_small.svg'
import { ReactComponent as LogoLight } from '@assets/mtb_logo_static.svg'
import { Box, Hidden } from '@mui/material'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import theme, { latoFont } from '@style/theme'
import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNav from './MobileNav'

const StyledLink = styled('span')<{ islight?: boolean }>(({ theme, islight }) => ({
  '&>a': {
    margin: theme.spacing(5),
    padding: theme.spacing(0.5, 0),
    textDecoration: 'none',
    fontFamily: latoFont,

    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',

    display: 'flex',

    color: '#353A3F',

    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      paddingTop: '2px',
      paddingBottom: '1px',
      borderBottom: `1px solid #353A3F`,
    },
  },
}))

type AppTopNavProps = {
  routes: { name: string; path: string }[]
  islight?: boolean
  onJoin: () => void
}

const TopNav: FunctionComponent<AppTopNavProps> = ({
  routes,
  islight,
  onJoin,
  ...props
}: AppTopNavProps) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  return (
    <>
      <Hidden lgUp>
        <Box
          sx={{
            height: '65px',
            display: 'flex',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            boxShadow: '0 0px 8px 0px #ddd',
            px: 2,
            py: 1,
            mb: 2,
          }}>
          <a href="/">
            <LogoSmall title="Mobile Toolbox" style={{ paddingLeft: '16px' }} />
          </a>
          <MobileNav
            islight={islight}
            routes={routes.filter(route => route.name)}
            onJoin={onJoin}
          />
        </Box>
      </Hidden>
      <Hidden lgDown>
        <Box
          sx={{
            height: '104px',
            display: 'flex',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            boxShadow: '0 0px 8px 0px #ddd',
            px: 10,
            py: 5,
            mb: 3,
          }}>
          <a href="/">
            <LogoLight title="Mobile Toolbox" style={{ paddingLeft: '16px' }} />
          </a>

          <Toolbar
            component="nav"
            variant="dense"
            disableGutters
            sx={{
              padding: theme.spacing(4, 4),
              justifyContent: 'space-between',
            }}>
            {routes
              .filter(r => !!r.name)
              .map(route => (
                <StyledLink islight={islight} key={route.path}>
                  <NavLink
                    to={route.path}
                    key={route.name}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 800 : 400,
                      color: isActive ? '#4F527D' : ' #353A3F',
                    })}>
                    {route.name}
                  </NavLink>
                </StyledLink>
              ))}
            <StyledLink islight={islight}>
              <a onClick={onJoin}>Sign Up</a>
            </StyledLink>
          </Toolbar>
        </Box>
      </Hidden>
    </>
  )
}

export default TopNav

import { ReactComponent as Logo } from '@assets/mtb_logo_static.svg'
import { ReactComponent as LogoLight } from '@assets/mtb_logo_static_blue.svg'
import { Box, Hidden } from '@mui/material'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import theme, { colors, latoFont } from '@style/theme'
import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import LoginLink from './LoginLink'
import MobileNav from './MobileNav'


const StyledLink = styled('span')<{ isLight?: boolean }>(({ theme, isLight }) => ({
  '&>a': {
    margin: theme.spacing(5),
    padding: theme.spacing(0.5, 0),
    textDecoration: 'none',
    fontFamily: latoFont,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    color: isLight ? colors.neutralsBlack : theme.palette.common.white,
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      paddingTop: '2px',
      paddingBottom: '1px',
      borderBottom: isLight ? `1px solid ${colors.neutralsBlack}` : `1px solid ${theme.palette.common.white}`,
    }
  }
}))


type AppTopNavProps = {
  routes: { name: string; path: string; }[],
  isLight?: boolean

}

const TopNav: FunctionComponent<AppTopNavProps> = ({
  routes,
  isLight,

  ...props
}: AppTopNavProps) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  return (
    <>
      <Hidden lgUp>
        <MobileNav isLight={isLight} routes={routes.filter(route => route.name)}
        />

      </Hidden>
      <Hidden lgDown>
        <Box sx={{
          height: '104px',
          display: 'flex',
          backgroundColor: isLight ? colors.neutralsWhite : colors.primaryBlue,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          px: 10,
          py: 5
        }}>
          {
            isLight ?
              <LogoLight
                title="Mobile Toolbox"
                style={{ paddingLeft: '16px' }}
              /> :
              <Logo
                title="Mobile Toolbox"
                style={{ paddingLeft: '16px' }}
              />}
          <Toolbar
            component="nav"
            variant="dense"
            disableGutters
            sx={{
              padding: theme.spacing(4, 4),
              justifyContent: 'space-between'
            }}>
            {routes.filter(r => !!r.name).map(route => (
              <StyledLink isLight={isLight}>
                <NavLink
                  to={route.path}
                  key={route.name}
                  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 400 })}>
                  {route.name}
                </NavLink>
              </StyledLink>
            ))}
            <StyledLink isLight={isLight}>
              <LoginLink key="loginLink" />
            </StyledLink>
          </Toolbar>
        </Box>
      </Hidden>
    </>
  )
}

export default TopNav

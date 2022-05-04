import { ReactComponent as Logo } from '@assets/mtb_logo_static.svg'
import { Box, Hidden } from '@mui/material'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import theme, { colors, latoFont } from '@style/theme'
import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import MobileNav from './MobileNav'


const StyledLink = styled('span')(({ theme }) => ({
  '&>a': {
    margin: theme.spacing(5),
    padding: theme.spacing(0.5, 0),
    textDecoration: 'none',
    fontFamily: latoFont,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '18px',
    color: theme.palette.common.white,
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      paddingTop: '2px',
      paddingBottom: '1px',
      borderBottom: '1px solid #fff',
    }
  }


}))


type AppTopNavProps = {
  routes: { name: string; path: string; }[]

}

const TopNav: FunctionComponent<AppTopNavProps> = ({
  routes,


  ...props
}: AppTopNavProps) => {

  const location = useLocation()

  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  // Hide the app store download page and also the sign in page from the nav.






  return (
    <>

      <Hidden lgUp>
        <MobileNav routes={routes.filter(route => route.name)}
        />

      </Hidden>
      <Hidden lgDown>
        <Box sx={{
          height: '104px',
          display: 'flex',
          backgroundColor: colors.primaryDarkBlue,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 0
        }}>
          <Logo
            title="Mobile Toolbox"

            style={{ paddingLeft: '16px' }}
          />
          <Toolbar
            component="nav"
            variant="dense"
            disableGutters
            sx={{
              padding: theme.spacing(4, 4),
              justifyContent: 'space-between'
            }}>
            {routes.filter(r => !!r.name).map(route => (
              <StyledLink>
                <NavLink
                  to={route.path}
                  key={route.name}
                  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
                >

                  {route.name}
                </NavLink>
              </StyledLink>
            ))}
          </Toolbar>
        </Box>

      </Hidden>
    </>
  )
}

export default TopNav

import { Box, Hidden } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router'
import { ReactComponent as Logo } from '../../assets/mtb_logo_static.svg'
import theme, { colors } from '../../theme'
import { MenuLinks } from './MenuLinks'
import MobileNav from './MobileNav'



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
        <MobileNav >
          <MenuLinks
            className={''}
            activeClassName={''}
            routes={routes.filter(route => route.name)}
          />
        </MobileNav>
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

            style={{paddingLeft: '16px'}}
          />
          <Toolbar
            component="nav"
            variant="dense"
            disableGutters
            sx={{
              padding: theme.spacing(4, 4),
              justifyContent: 'space-between'
            }}>
            <MenuLinks
              className={''}
              activeClassName={''}
              routes={routes.filter(route => route.name)}
            />
          </Toolbar>
        </Box>

      </Hidden>
    </>
  )
}

export default TopNav

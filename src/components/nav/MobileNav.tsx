//import MobileDrawerMenuHeader from '@components/widgets/MobileDrawerMenuHeader'
import {ReactComponent as Logo} from '@assets/mtb_logo_white.svg'
import ClearIcon from '@mui/icons-material/Clear'
import Menu from '@mui/icons-material/Menu'
import {Box, Drawer, IconButton, Link} from '@mui/material'
import {styled} from '@mui/material/styles'
import {colors, latoFont} from '@style/theme'
import React, {FunctionComponent} from 'react'
import {NavLink} from 'react-router-dom'

const drawerWidth = '200px'

const OpenMobileMenuButton = styled(IconButton)(({theme, color}) => ({
  marginRight: theme.spacing(2),
  float: 'right',
  display: 'block',
  textAlign: 'right',
  color: color,
  '&::after': {
    content: '',
    display: 'table',
    clear: 'both',
  },
}))

const StyledLink = styled('span')(({theme}) => ({
  display: 'block',
  '&>a': {
    margin: theme.spacing(2, 0),
    display: 'block',
    paddingLeft: theme.spacing(3),
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
      backgroundColor: '#fff',
      color: colors.gray800,
    },
  },
}))

const DrawerBox = styled(Drawer)(({theme}) => ({
  width: drawerWidth,
  flexShrink: 0,

  '& .MuiPaper-root': {
    width: drawerWidth,
    backgroundColor: colors.primaryPurple, //'#F8F8F8',
  },
}))

type Routes = {name: string; path: string}[]

const MobileNav: FunctionComponent<{
  routes: Routes
  islight?: boolean
  onJoin: () => void
}> = ({routes, islight, onJoin}) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  return (
    <>
      {' '}
      <OpenMobileMenuButton
        color={islight ? 'primary' : 'inherit'}
        aria-label="Open drawer"
        edge="end"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        size="large">
        <Menu />
      </OpenMobileMenuButton>
      <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}>
        <DrawerBox
          variant="temporary"
          anchor="right"
          open={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          classes={
            {
              // paper: classes.drawerPaper,
            }
          }
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <Box
            display="flex"
            mt={2}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start">
            <Link
              sx={{ml: 3, mb: 5, width: '150px'}}
              target="_blank"
              href="/"
              className={'' /*classes.mobileToolBarLink*/}>
              <Logo />
            </Link>
            <ClearIcon
              style={{
                color: '#fff',
                position: 'absolute',
                right: '3px',
                top: '10px',
              }}
              onClick={() => setIsMobileOpen(false)}
            />
          </Box>

          {routes
            .filter(r => !!r.name)
            .map(route => (
              <StyledLink>
                <NavLink
                  to={route.path}
                  key={route.name}
                  style={({isActive}) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                  })}>
                  {route.name}
                </NavLink>
              </StyledLink>
            ))}
          <StyledLink>
            <a onClick={onJoin}>
              <strong>Join</strong>
            </a>
          </StyledLink>
        </DrawerBox>
      </Box>
    </>
  )
}

export default MobileNav

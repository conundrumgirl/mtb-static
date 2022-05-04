//import MobileDrawerMenuHeader from '@components/widgets/MobileDrawerMenuHeader'
import AbcIcon from '@mui/icons-material/Abc';
import ListIcon from '@mui/icons-material/List';
import { Box, Drawer, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { FunctionComponent } from 'react';
import { ReactComponent as Logo } from '../../assets/mtb_logo_static.svg';
import { colors, latoFont } from '../../theme';
import MobileDrawerMenuHeader from './MobileDrawerMenuHeader';





const drawerWidth = '320px'


const Item = styled(Box)<{test?: number}>(({theme, test}) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //...theme.typography.body1,
  /*  ...theme.typography.body2,*/
  // padding: theme.spacing(1),
  /*[theme.breakpoints.down('lg')]: {
    padding: theme.spacing()
  },*/
  //border: '1px solid black',

  color: theme.palette.text.primary,
  background: test,
  borderRadius: 0,
}))

const OpenMobileMenuButton = styled(IconButton)(({theme}) => ({

    marginRight: theme.spacing(2),
    float: 'right',
    '&::after': {
      content: '',
      display: 'table',
      clear: 'both',
    },
  }
))

const DrawerBox = styled(IconButton)(({theme}) => ({

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerMenuItem: {
    fontFamily: latoFont,
    fontSize: '15px',
    textDecoration: 'none',
    color: 'inherit',
    flexShrink: 0,
    height: '56px',
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(3),
    '&:hover': {
      backgroundColor: '#fff',
    },

    '&$drawerProfileOptionsDisabled:hover': {
      backgroundColor: 'inherit',
      cursor: 'default',
    },
    display: 'flex',
    alignItems: 'center',
    borderLeft: '4px solid transparent',
  },
  drawerMenuSelectedLink: {
    borderLeft: '4px solid #353535',
    fontWeight: 'bold',
  },
  drawerMenuSeparator: {
    height: '2px',
    margin: '20px 0px',
    backgroundColor: '#2A2A2A',
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: colors.primaryDarkBlue, //'#F8F8F8',
  },

}))



const MobileNav: FunctionComponent<{children: React.ReactNode}> = ({

  children
}) => {

  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const menuChildren = React.Children.toArray(children)
  if (menuChildren.length < 2) {
    return <>no kids</>
  }
  return (
    <>
    <AbcIcon/>
      {' '}
      <OpenMobileMenuButton
        color="inherit"
        aria-label="Open drawer"
        edge="end"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
    
        size="large">
        <ListIcon/>
      </OpenMobileMenuButton>
      <Box sx={{ width: drawerWidth,
    flexShrink: 0}}>
        <Drawer
          variant="temporary"
          anchor="right"
          open={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          classes={{
           // paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <MobileDrawerMenuHeader
            setIsMobileOpen={setIsMobileOpen}
  
            logoImage={<Logo style={{width: '120px'}} />}
          />

          {menuChildren}

        </Drawer>
      </Box>
    </>
  )
}

export default MobileNav

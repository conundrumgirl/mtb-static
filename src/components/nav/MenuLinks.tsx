
import { styled } from '@mui/material/styles';
import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { latoFont } from '../../theme';

type MenuLinksProps = {
  routes: {name: string; path: string; isRhs?: boolean}[]
  className: string
  disabledClassName?: string
  activeClassName: string


}
const StyledLink = styled('span')(({theme}) => ({
  '&>a':{

    margin: theme.spacing(5),
    padding: theme.spacing(0.5, 0),
    textDecoration: 'none',
    // flexShrink: 0,
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
    }}


}))

export const MenuLinks: FunctionComponent<MenuLinksProps> = ({
  routes,
  className,
  activeClassName,
}) => {
  console.log('menulink', routes)
  let links = routes.map(route => (
    <StyledLink>
    <NavLink
      to={route.path}
      key={route.name}
      style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
     >
    
      {route.name}
    </NavLink>
    </StyledLink> 
  ))

  return <>{links}</>
}


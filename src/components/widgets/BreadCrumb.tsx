import { ReactComponent as BackIcon } from '@assets/arrow_l.svg'
import { Breadcrumbs, styled, Typography } from '@mui/material'
import theme, { colors } from '@style/theme'
import React from 'react'
import { NavLink } from 'react-router-dom'


export interface BreadCrumbProps {
  links: { url: string; text: string }[]
  currentItem?: string
}

const StyledLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))


const BreadCrumb: React.FunctionComponent<BreadCrumbProps> = ({
  links,
  currentItem = '',
}: BreadCrumbProps) => {

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={currentItem ? '/' : ''}>
      {links.map((link, index) => (
        <StyledLink to={link.url} key={link.url} >
          {index === 0 && <BackIcon style={{ width: '18px' }} />}
          <Typography

            sx={{
              fontFamily: 'poppins',
              fontSize: '12px',
              lineHeight: '20px',
              marginLeft: index > 0 ? theme.spacing(1.25) : 0
            }}

          >
            {link.text}
          </Typography>
        </StyledLink>
      ))}

      <Typography sx={{
        fontFamily: 'poppins',
        fontSize: '12px',
        lineHeight: '20px',
        color: colors.primaryDarkBlue
      }}>
        {currentItem}
      </Typography>
    </Breadcrumbs>
  )
}

export default BreadCrumb

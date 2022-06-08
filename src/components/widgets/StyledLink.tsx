import {ReactComponent as MoreArrow} from '@assets/more_arrow.svg'
import {styled} from '@mui/material/styles'
import {colors} from '@style/theme'
import {Link, LinkProps} from 'react-router-dom'

const StyledLink = styled(Link)(({theme}) => ({
  color: colors.secondaryRed,
  fontSize: '14px',
  textDecoration: 'none',
  width: 'fit-content',
  display: 'flex',
  lineHeight: '14px',
  flexDirection: 'row',
  alignItems: 'center',

  '&:hover': {
    color: colors.primaryPurple,
    '> svg path': {
      fill: colors.primaryPurple,
    },
  },
  '&:focus': {
    color: colors.neutralsBlack,
    '> svg path': {
      fill: colors.neutralsBlack,
    },
  },
  '&:disabled': {
    color: colors.gray900,
    '> svg path': {
      fill: colors.gray900,
    },
  },
}))

const BlueStyledLink: React.FunctionComponent<LinkProps> = ({
  children,
  ...rest
}) => {
  return (
    <StyledLink {...rest}>
      {children}&nbsp;&nbsp;
      <MoreArrow />
    </StyledLink>
  )
}

export default BlueStyledLink

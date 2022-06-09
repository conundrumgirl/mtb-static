import {Box, Paper} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import {colors} from '@style/theme'

export const StyledCard = styled(Paper)<{
  minHeight?: number
  minWidth?: number
  paddingY?: number
  paddingX?: number
  color?: string
}>(({theme, minWidth, minHeight, paddingX, paddingY, color}) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '20px',
  borderLeft: `solid 17px ${colors.secondaryRed}`,
  padding: theme.spacing(paddingY ?? 18, paddingX ?? 16),
  minHeight: theme.spacing(minHeight ?? 118),
  marginTop: theme.spacing(8),
  color: color ?? 'black',
}))

export const Section = styled(Box)(({theme}) => ({
  //padding: theme.spacing(10, 6),
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '66px 0px 20px 0',
  [theme.breakpoints.down('lg')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}))

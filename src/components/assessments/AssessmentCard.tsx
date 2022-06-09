import mtb_a from '@assets/mtb_assessment.svg'
import {styled} from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import theme, {colors, playfairDisplayFont, poppinsFont} from '@style/theme'
import {Assessment} from '@typedefs/types'
import {FunctionComponent} from 'react'
import AssessmentImage from './AssessmentImage'

const StyledCard = styled(Card)(({theme}) => ({
  width: theme.spacing(62),
  height: theme.spacing(95),
  borderTop: `5px solid ${colors.secondaryRed}`,
  textAlign: 'left',
  // border: '1px solid gray',
  padding: 0,

  display: 'flex',
  flexDirection: 'column',
  color: colors.neutralsBlack,
}))

const StyledCardContent = styled(CardContent)(({theme}) => ({
  height: theme.spacing(45),
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#C4C4C4',
  },
  zIndex: 100,
}))

type AssessmentCardOwnProps = {
  assessment: Assessment
  index: number
}

type AssessmentCardProps = AssessmentCardOwnProps

const AssessmentCard: FunctionComponent<AssessmentCardProps> = ({
  assessment,

  index,
}) => {
  return (
    <StyledCard>
      <AssessmentImage
        resources={assessment.resources}
        variant="normal"
        name={assessment.title}
      />

      <StyledCardContent>
        <Typography
          sx={{
            textTransform: 'uppercase',

            fontSize: '12px',
            paddingBottom: '8px',
          }}>
          {assessment.tags.join(', ')}
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontFamily: poppinsFont,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {assessment.title}
        </Typography>

        <Typography
          sx={{
            flexGrow: 0,
            fontSize: 12,

            paddingBottom: 0,
          }}>
          {assessment.summary}
        </Typography>
      </StyledCardContent>
      <CardActions
        sx={{
          marginTop: 0,
          display: 'flex',
          fontFamily: playfairDisplayFont,
          fontStyle: 'italic',
          fontSize: '12px',
          padding: theme.spacing(1, 2),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div>{`${assessment.minutesToComplete} min.`} </div>
        <img src={mtb_a} alt="mtb official version" />
      </CardActions>
    </StyledCard>
  )
}

export default AssessmentCard

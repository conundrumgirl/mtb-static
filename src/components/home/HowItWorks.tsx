import {ReactComponent as Step1} from '@assets/home_step1.svg'
import {ReactComponent as Step2} from '@assets/home_step2.svg'
import {ReactComponent as Step3} from '@assets/home_step3.svg'
import {ReactComponent as Step4} from '@assets/home_step4.svg'
import {Grid, Typography} from '@mui/material'
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'
import {colors} from '@style/theme'
import * as React from 'react'
import {FunctionComponent} from 'react'
import Carousel from '../widgets/Carousel'
/*import { ReactComponent as MoreArrow } from '@assets/more_arrow.svg'*/

const Item = styled('div')<{test?: number}>(({theme, test}) => ({
  padding: theme.spacing(1),

  textAlign: 'left',
  color: theme.palette.text.primary,
  background: test,
  borderRadius: 0,
}))

const StyledNumber = styled(Box)(({theme}) => ({
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '72px',
  lineHeight: '86px',
  display: 'flex',
  alignItems: 'center',
  color: colors.secondaryRed,
  marginButtom: theme.spacing(2),
}))
/*
const LearnMoreLink = styled(Link)(({theme}) => ({
  color: colors.secondaryRed,
  fontSize: '14px',
  textDecoration: 'none',

  display: 'flex',
  lineHeight: '14px',
  flexDirection: 'row',
  alignItems: 'center',
}))*/

/*const Body = styled('p')(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '14px',
  // fontSize: '14px',
  lineHeight: '17px',
  marginBottom: theme.spacing(4),
}))*/

const info = [
  {
    title: 'How It Works',
    intro:
      'The research team selects the assessments and designs the assessment schedule to fit their study’s unique needs.',
    /*body: 'The Mobile Toolbox Study Builder supports flexible scheduling of assessments to meet most single-arm protocol requirements. Schedules can include dates for custom events such as clinic visits.', */
    link: 'www.google.com',
    image: <Step1 width="100%" />,
  },
  {
    title: 'How It Works',
    intro:
      'The research team recruits participants and invites them to download the secure app on their iOS or Android smartphone.',
    /* body: 'Participants receive login information to use with their iOS or Android smartphone. They always have access to study and privacy information within the App.',*/
    link: 'www.google.com',
    image: <Step2 width="100%" />,
  },
  {
    title: 'How It Works',
    intro:
      'Participants can complete brief cognitive assessments (<10 minutes each), view the study schedule, and receive reminders remotely on their smartphone.',
    /* body: 'Participants can see their upcoming and past activities in the App. They can optionally receive reminder notifications. ', */
    link: 'www.google.com',
    image: <Step3 width="100%" />,
  },
  {
    title: 'How It Works',
    intro:
      'Data is encrypted and uploaded to the Mobile Toolbox platform for analysis.',
    /* body: 'Data is encrypted and uploaded from each participant’s phone while it is connected to the internet with a WiFi or cellular data connection. Data is processed and curated and is available under controlled access.', */
    link: 'www.google.com',
    image: <Step4 width="100%" />,
  },
]

export const HowItWorksDesktop: FunctionComponent = () => {
  return (
    <>
      <Typography variant="h2" mb={12}>
        How It Works
      </Typography>
      <Grid
        container
        columnSpacing={{xs: 1, lg: 25}}
        rowSpacing={{xs: 2, lg: 10}}
        justifyContent="space-between"
        alignItems="top">
        {info.map((item, index) => (
          <>
            <Grid item xs={12} lg={6} key={`${index}`}>
              <Item>
                <StyledNumber>0{index + 1}</StyledNumber>
                <Typography
                  variant="largeBodyCopy"
                  component={'p'}
                  mb={4}
                  sx={{height: '80px'}}>
                  {item.intro}
                </Typography>
                {/*   <Typography variant="body1" mb={4}>
                  {item.body}
        </Typography>*/}
                {/*<LearnMoreLink to={item.link}>
                Learn More&nbsp;&nbsp;
                <MoreArrow />
      </LearnMoreLink> */}
              </Item>
              <Item
                sx={{
                  textAlign: {xs: 'center', md: 'right'},
                  marginTop: 11.5,
                }}>
                {item.image}
              </Item>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  )
}

export const HowItWorksMobile: FunctionComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const innerElements = info.map((item, index) => (
    <Box textAlign="left">
      <Typography variant="largeBodyCopy" mb={4} component={'p'}>
        {item.intro}
      </Typography>
      {/*   <Typography variant="body1" mb={4}>
        {item.body}
  </Typography>*/}
      {/*{' '}
      <LearnMoreLink to={item.link}>
        Learn More&nbsp;&nbsp;
        <MoreArrow />
      </LearnMoreLink>{' '}
  */}
      <Box key={index} marginTop={8}>
        {item.image}
      </Box>
    </Box>
  ))

  return (
    <Grid container>
      <Grid item xs={12} textAlign="left" alignContent={'center'}>
        <Typography variant="h2" mb={10}>
          How It Works
        </Typography>
        <Carousel
          elements={innerElements}
          activeStep={activeStep}
          onChangeStep={step => {
            setActiveStep(step)
          }}></Carousel>
      </Grid>
    </Grid>
  )
}

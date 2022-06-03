import {ReactComponent as Step1} from '@assets/home_step1.svg'
import {ReactComponent as Step2} from '@assets/home_step2.svg'
import {ReactComponent as Step3} from '@assets/home_step3.svg'
import {ReactComponent as Step4} from '@assets/home_step4.svg'
import {Grid, Typography} from '@mui/material'
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'
import {colors, latoFont} from '@style/theme'
import * as React from 'react'
import {FunctionComponent} from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../widgets/Carousel'
/*import { ReactComponent as MoreArrow } from '@assets/more_arrow.svg'*/

const Item = styled('div')<{test?: number}>(({theme, test}) => ({
  padding: theme.spacing(1),

  textAlign: 'left',
  color: theme.palette.text.primary,
  background: test,
  borderRadius: 0,
}))

const Intro = styled('p')(({theme}) => ({
  py: 7,
  fontSize: '24px',
  lineHeight: '29px',
  opacity: 0.6,
}))

const LearnMoreLink = styled(Link)(({theme}) => ({
  color: colors.accent,
  fontSize: '14px',
  textDecoration: 'none',

  display: 'flex',
  lineHeight: '14px',
  flexDirection: 'row',
  alignItems: 'center',
}))

const Body = styled('p')(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '14px',
  // fontSize: '14px',
  lineHeight: '17px',
  marginBottom: theme.spacing(4),
}))

const info = [
  {
    title: 'How it works',
    intro:
      ' A Study Designer selects the assessments, designs the schedule, and saves the study configuration.',
    body: 'The Mobile Toolbox Study Builder supports flexible scheduling of assessments to meet most single-arm protocol requirements. Schedules can include dates for custom events such as clinic visits.',
    link: 'www.google.com',
    image: <Step1 width="100%" />,
  },
  {
    title: 'How it works',
    intro:
      ' A Study Coordinator recruits participants to the study and invites them to download the App.',
    body: 'Participants receive login information to use with their iOS or Android smartphone. They always have access to study and privacy information within the App.',
    link: 'www.google.com',
    image: <Step2 width="100%" />,
  },
  {
    title: 'How it works',
    intro:
      ' Study participants download the App, register for the study, and perform remote cognitive assessments using a smartphone.',
    body: 'Participants can see their upcoming and past activities in the App. They can optionally receive reminder notifications. ',
    link: 'www.google.com',
    image: <Step3 width="100%" />,
  },
  {
    title: 'How it works',
    intro:
      ' Data is uploaded to the Mobile Toolbox platform and made ready for analysis. ',
    body: 'Data is encrypted and uploaded from each participant’s phone while it is connected to the internet with a WiFi or cellular data connection. Data is processed and curated and is available under controlled access.',
    link: 'www.google.com',
    image: <Step4 width="100%" />,
  },
]

export const HowItWorksDesktop: FunctionComponent = () => {
  return (
    <Grid
      container
      columnSpacing={{xs: 0, lg: 15}}
      rowSpacing={{xs: 2, lg: 59}}
      justifyContent="space-between"
      alignItems="center">
      {info.map((item, index) => (
        <>
          <Grid item xs={12} lg={6} key={`${index}`}>
            <Item>
              <Typography variant="h2" mb={12}>
                {item.title}
              </Typography>
              <Typography variant="h1" sx={{color: '#37E7E7'}}>
                0{index + 1}
              </Typography>
              <Intro>{item.intro}</Intro>
              <Body>{item.body}</Body>
              {/*<LearnMoreLink to={item.link}>
                Learn More&nbsp;&nbsp;
                <MoreArrow />
      </LearnMoreLink> */}
            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item sx={{textAlign: {xs: 'center', md: 'right'}}}>
              {item.image}
            </Item>
          </Grid>
        </>
      ))}
    </Grid>
  )
}

export const HowItWorksMobile: FunctionComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const innerElements = info.map((item, index) => (
    <Box textAlign="left">
      <Typography variant="h2" mb={12}>
        {item.title}
      </Typography>
      <Intro>{item.intro}</Intro>
      <Body>{item.body}</Body>
      {/*{' '}
      <LearnMoreLink to={item.link}>
        Learn More&nbsp;&nbsp;
        <MoreArrow />
      </LearnMoreLink>{' '}
  */}
      <div key={index}>{item.image}</div>
    </Box>
  ))

  return (
    <Grid container>
      <Grid item xs={12} textAlign="left" alignContent={'center'}>
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

import { default as bgExperiences } from '@assets/bg_home_experiences.svg'
import { default as bgSecurity } from '@assets/bg_home_security.svg'
import PageShell from '@components/widgets/PageShell'
import { Box, Grid, Hidden, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import theme, { colors } from '@style/theme'
import * as React from 'react'
import { FunctionComponent } from 'react'
import About from './About'
import Contribute from './Contribute'
import Experiences from './Experiences'
import { HowItWorksDesktop, HowItWorksMobile } from './HowItWorks'
import Partners from './Partners'
import Project from './Project'
import Science from './Science'
import Security from './Security'



// with property e.g. const Item = styled(Box)<{test?: number}>(({theme, test}) => ({
const Item = styled(Box)<{ test?: number }>(({ theme, test }) => ({
  color: theme.palette.text.primary,
  background: test,
  borderRadius: 0,
}))


const Section = styled(Box)(({ theme }) => ({
  //padding: theme.spacing(10, 6),
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '66px 0px',
  [theme.breakpoints.down('lg')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}))


const Home: FunctionComponent = () => {
  return (
    <PageShell  >
      <Grid
        container
      >
        <Grid item xs={12}>
          <Section>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 4, lg: 5 }}>
              {/*header */}
              <Grid item xs={12} lg={6}>
                <Item >
                  <Typography variant="h1" >Mobile Toolbox!</Typography>
                  <Typography variant="h3" color={theme.palette.text.secondary} mb={15}
                  >
                    A comprehensive research and analytics platform to launch fully remote, smartphone app-based cognitive assessment studies. Mobile Toolbox delivers validated cognitive assessments that are developed and validated by experts in the field of cognitive research.
                  </Typography>
                </Item>
              </Grid>
            </Grid>
            {/*how it works */}
            <Hidden lgUp>
              <HowItWorksMobile />
            </Hidden>
            <Hidden lgDown>
              <HowItWorksDesktop />
            </Hidden>
          </Section>
          <Box sx={{ backgroundColor: colors.primaryLightBlue }}>
            <Section>
              <Science />
            </Section>
          </Box>
          <Box sx={{
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left bottom',
            backgroundImage: { lg: 'url(' + bgExperiences + ')' },
          }}>
            <Section>
              <Experiences />
            </Section>
          </Box>
          <Box bgcolor={colors.primaryLightBlue}
            sx={{
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: { lg: 'url(' + bgSecurity + ')' },
            }}>
            <Section>
              <Security />
            </Section>
          </Box>
          <Section>
            <About />
          </Section>
          <Box bgcolor={colors.neutralsWhite}>
            <Section>
              <Partners />
            </Section>
          </Box>
          <Box bgcolor={colors.primaryLightBlue}>
            <Section>
              <Project />
            </Section>
          </Box>
          <Section>
            <Contribute />
          </Section>
        </Grid>
      </Grid>
    </PageShell>
  )
}
export default Home

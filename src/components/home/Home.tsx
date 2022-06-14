import {ReactComponent as MTBImage} from '@assets/mtb_pastel.svg'
import PageShell from '@components/widgets/PageShell'
import {Section} from '@components/widgets/Styled'
import {Box, Grid, Hidden, Typography} from '@mui/material'
import {colors} from '@style/theme'
import * as React from 'react'
import {FunctionComponent} from 'react'
import {HowItWorksDesktop, HowItWorksMobile} from './HowItWorks'
import Partners from './Partners'
import Science from './Science'

// with property e.g. const Item = styled(Box)<{test?: number}>(({theme, test}) => ({

const Home: FunctionComponent<{onJoin: () => void}> = ({onJoin}) => {
  return (
    <PageShell onJoin={onJoin}>
      <Grid container>
        <Grid item xs={12}>
          <Section>
            <Grid container rowSpacing={1} columnSpacing={{xs: 4, lg: 5}}>
              {/*header */}
              <Grid item xs={12} lg={7}>
                <Typography variant="h1">Mobile Toolbox</Typography>
                <Typography
                  variant="largeBodyCopy"
                  maxWidth="800px"
                  component={'p'}
                  mb={0}
                  mt={10}>
                  Mobile Toolbox allows researchers to conduct studies remotely by delivering digital tests of cognition to participants through a smartphone app. Our mission is to make well-characterized and scientifically validated measures of health widely available and easy to use by researchers studying Alzheimer’s disease and other conditions.{' '}
                </Typography>
              </Grid>
              <Box
                component={Grid}
                item
                xs={5}
                textAlign="right"
                display={{xs: 'none', lg: 'block'}}>
                <MTBImage />
              </Box>
            </Grid>
          </Section>
          <Box sx={{backgroundColor: colors.purpleTransparency2}}>
            <Section>
              <Science />
            </Section>
          </Box>
          {/*how it works*/}
          <Section>
            <Hidden lgUp>
              <HowItWorksMobile />
            </Hidden>
            <Hidden lgDown>
              <HowItWorksDesktop />
            </Hidden>
          </Section>
          {/*
          <Box
            sx={{
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left bottom',
              backgroundImage: {lg: 'url(' + bgExperiences + ')'},
            }}>
            <Section>
              <Experiences />
            </Section>
          </Box>
          <Box
            bgcolor={colors.purpleTransparency2}
            sx={{
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: {lg: 'url(' + bgSecurity + ')'},
            }}>
            <Section>
              <Security />
            </Section>
          </Box>*/}
          {/* <Section>
            <About />
          </Section>*/}
          <Box bgcolor={colors.purpleTransparency2}>
            <Section>
              <Partners />
            </Section>
          </Box>
          {/* <Box bgcolor={colors.purpleTransparency2}>
            <Section>
              <Project />
        </Section>
          </Box>
          <Section>
            <Contribute />
          </Section>*/}
        </Grid>
      </Grid>
    </PageShell>
  )
}
export default Home

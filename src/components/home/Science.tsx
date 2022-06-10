import {ReactComponent as Icon1} from '@assets/science1.svg'
import {ReactComponent as Icon2} from '@assets/science2.svg'
import {ReactComponent as Icon3} from '@assets/science3.svg'
import {Box, Button, Grid, Typography} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import theme from '@style/theme'
import React, {FunctionComponent} from 'react'

const ScienceContainer = styled(Box)(({theme}) => ({}))

const IconHolder = styled('div')(({theme}) => ({
  display: 'flex',
  height: '100px',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(5),
}))

const Science: FunctionComponent<{}> = () => {
  return (
    <ScienceContainer>
      <Typography variant="h2" mb={10}>
        Trusted Science
      </Typography>
      <Grid
        container
        marginBottom={10}
        rowSpacing={{xs: 1, lg: 10}}
        columnSpacing={{xs: 4, lg: 12}}>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" mb={10} component="div">
            Mobile Toolbox delivers cognitive measures designed and validated
            for remote administration through digital health tools developed by
            teams of scientists with decades of measures development. The
            growing portfolio of digital assessments include assessments derived
            from well-established measurement systems such as the NIH Toolbox®,
            Patient Reported Outcomes Measurement Information System (PROMIS ®);
            and International Cognitive Ability Resource (ICAR). Built on top of
            Sage Bionetwork’s Mobile Health Platform that has supported 500k
            research participants provides tools for automated iOS and Android
            app configuration, study management, and data collection.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" mb={10} component="div">
            Core to Mobile Toolbox is to provide detailed and transparent
            validation including access to validation data. The initial core
            cognitive tests have been validated against gold standard measures
            in healthy adults ages 20-85. Additional clinical validation and
            norming is currently underway including collection of norms and 12-
            18- and 24-month change scores are being calculated using an
            age-stratified (20-85), iOS vs Android, national sample matching the
            2020 US Census for gender, race, ethnicity, SES and level of
            education. Clinical validation is in-progress (2022-2023) in 6
            different studies including healthy and clinical samples, including
            persons at risk for MCI or AD, cognitively impaired and those with
            Parkinson’s disease.
          </Typography>
        </Grid>

        <Grid item xs={12} lg={4} textAlign="center">
          <IconHolder>
            {' '}
            <Icon2 />
          </IconHolder>
          <Typography
            component="p"
            mb={10}
            variant="largeBodyCopy"
            color={theme.palette.text.secondary}>
            Mobile Toolbox assesements have been validated against gold
            standard.
          </Typography>
          <Box mb={10}>
            <Button variant="contained" color="primary" href="/assessments">
              View Our Assessments
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4} textAlign="center">
          <IconHolder>
            {' '}
            <Icon1 />
          </IconHolder>
          <Typography component="p" variant="largeBodyCopy" mb={10}>
            Remote assessments created by domain experts.
          </Typography>
          <Box mb={10}>
            <Button variant="contained" color="primary" href="/about-us">
              {' '}
              View Our Contributors
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4} textAlign="center">
          <IconHolder>
            {' '}
            <Icon3 />
          </IconHolder>

          <Typography component="p" variant="largeBodyCopy" mb={10}>
            We transparently publish our methods and data for comparison.
          </Typography>
          <Button variant="contained" color="primary" href="" disabled={true}>
            {' '}
            View Sample Data
          </Button>
        </Grid>
      </Grid>
    </ScienceContainer>
  )
}

export default Science

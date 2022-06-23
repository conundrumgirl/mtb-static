import {ReactComponent as Icon1} from '@assets/science1.svg'
import {ReactComponent as Icon2} from '@assets/science2.svg'
import {ReactComponent as Icon3} from '@assets/science3.svg'
import {Box, Button, Grid, Typography} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import {colors} from '@style/theme'
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
            Mobile Toolbox delivers cognitive and other health measures
            developed by content experts and validated for remote
            administration. Our growing library of digital measures is derived
            from well-established measurement systems such as the NIH Toolbox®,
            Patient Reported Outcomes Measurement Information System (PROMIS ®),
            and International Cognitive Ability Resource (ICAR). Built on top of
            Sage Bionetwork’s Mobile Health Platform that has supported 500k
            research participants, Mobile Toolbox provides tools for automated
            iOS and Android app configuration, study management, and data
            collection.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" mb={10} component="div">
            Mobile Toolbox values transparency. We provide detailed descriptions
            of our methods and open access to our validation data. Convergent
            validity evidence with gold standard measures has been collected
            among healthy adults ages 20-85. Additional clinical validation and
            norming is currently underway including collection of norms and 6-,
            12- 18- and 24-month change scores are being calculated using an
            age-stratified (20-85), iOS vs Android, national sample matching the
            2020 US Census for gender, race, ethnicity, SES and level of
            education. Clinical validation is in-progress (2022-2023) for 6
            different studies in healthy and clinical samples, including persons
            at risk for MCI or AD, cognitively impaired, and those with
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
            sx={{height: '80px'}}>
            Convergent validity evidence with gold standards has been collected
            for Mobile Toolbox.
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
          <Typography
            component="p"
            variant="largeBodyCopy"
            mb={10}
            sx={{height: '80px'}}>
            Remote assessments have been created by content experts.
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

          <Typography
            component="p"
            variant="largeBodyCopy"
            sx={{height: '80px'}}>
            We transparently publish our methods and data for sharing within the
            research community.
          </Typography>
          <Typography
            component="p"
            variant="smallItalic"
            color={colors.secondaryRed}
            mb={5.5}>
            Coming soon!
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

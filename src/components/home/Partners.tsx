import {ReactComponent as Northwestern_Logo} from '@assets/northwestern_logo.svg'
import {ReactComponent as PenState_Logo} from '@assets/penstate.svg'
import {ReactComponent as SageBio_Logo} from '@assets/sage_bio_logo.svg'
import {Box, Button, Grid, Typography} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import {colors} from '@style/theme'
import React, {FunctionComponent} from 'react'

const PartnersContainer = styled(Box)(({theme}) => ({}))

const Partners: FunctionComponent<{}> = () => {
  return (
    <PartnersContainer>
      <Typography variant="h2" color={colors.neutralsBlack} mb={10}>
        Our Contributors
      </Typography>
      <Typography variant="body1" maxWidth={'600px'} component="p" mb={25}>
        Mobile Toolbox comprises a team of clinical colleagues, cognition
        researchers, measurement scientists and technical experts with proven
        success in multiple large-scale validation and development projects.
        Co-Principal Investigators Drs. Gershon and Mangravite are at
        Northwestern University and Sage Bionetworks respectively. Dr. Martin
        Silwinski of Penn State University leads the integration of the Mobile
        Toolbox collaboration with Mobile Monitoring of Cognitive Change (M2C2).
      </Typography>
      <Grid container rowSpacing={15} columnSpacing={{xs: 4, lg: 10}} mb={10}>
        <Grid item xs={12} lg={4} textAlign="center">
          <Northwestern_Logo />
        </Grid>
        <Grid item xs={12} lg={4} textAlign="center">
          <SageBio_Logo />
        </Grid>
        <Grid item xs={12} lg={4} textAlign="center">
          <PenState_Logo />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button color="primary" variant="contained" href="/about-us">
            View Our Contributors
          </Button>
        </Grid>
      </Grid>

      {/*
      <Grid container rowSpacing={5} columnSpacing={{xs: 4, lg: 10}}>
        <Grid item xs={12} lg={4}>
          <Northwestern_Logo />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography component="p" variant="body2" paragraph>
            The Northwestern University Gershon and Mangravite are at
            Northwestern University and Sage Bionetworks respectively. Dr.
            Martin Sliwinski of Penn State University leads the integration of
            the Mobile Toolbox collaboration with Mobile Monitoring of Cognitive
            Change (M2C2).
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <SageBio_Logo />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography component="p" variant="body2" paragraph>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id{' '}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <PenState_Logo />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography component="p" variant="body2" paragraph>
            he Pennsylvania State University Sliwinski and Mangravite are at
            Northwestern University and Sage Bionetworks respectively. Dr.
            Martin Sliwinski of Penn State University leads the integration of
            the Mobile Toolbox collaboration with Mobile Monitoring of Cognitive
            Change (M2C2)
          </Typography>
        </Grid>
  </Grid>*/}
    </PartnersContainer>
  )
}

export default Partners

import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; //vs mui/styles
import theme from '@style/theme';
import React, { FunctionComponent } from 'react';
import StyledLink from '../widgets/StyledLink';

const ScienceContainer = styled(Box)(({ theme }) => ({
  /* backgroundPositionY: 'bottom',
  backgroundPositionX: 'right',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('lg')]: {
    backgroundImage: 'url(' + bgRight + ')',
    marginRight: '-200px',
    paddingRight: '200px',
  },*/
}))

const Science: FunctionComponent<{}> = () => {
  return (
    <ScienceContainer>
      <Typography variant="h2" mb={10}>Trusted Science</Typography>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 4, lg: 10 }}
      >
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>
              Mobile toolbox is a modern, mobile version of NIH Toolbox
              cognitive assessments. Mobile toolbox cognitive assessments have
              been validated against gold standard measures in healthy adults
              ages 20-85. The assessments have been normed and 3-month, 12-month
              and 24-month change scores calculated in an age-stratified
              (20-85), iOS vs Android, national sample matching the 2020 US
              Census (N=6,800) for gender, race, ethnicity, SES and level of
              education.
            </Typography>
            <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>
              Additional validation and longitudinal evaluation is in-progress
              (2022-2023) in healthy and clinical samples, including persons at
              risk for MCI or AD, cognitively impaired and those with
              Parkinson’s disease.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>
              Mobile Toolbox assesements have been validated against gold standard.
            </Typography>
            <Box mb={10}>
              <StyledLink to="" > Try out the assessments</StyledLink>

            </Box>
            <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>
              We transparently publish our methods and data for comparison.
            </Typography>
            <StyledLink to="" > See Sample Data</StyledLink>
          </Box>
        </Grid>
      </Grid>
    </ScienceContainer>
  )
}

export default Science

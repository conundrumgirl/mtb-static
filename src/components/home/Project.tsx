import { StyledCard } from '@components/widgets/Styled'
import { Box, Button, Grid, styled, Typography } from '@mui/material'
import theme from '@style/theme'
import React, { FunctionComponent } from 'react'


const CardGrid = styled(Box)(({ theme }) => ({


  display: 'grid',
  padding: theme.spacing(10, 0),
  gridTemplateColumns: `repeat(auto-fill,${theme.spacing(80)})`,
  gridColumnGap: theme.spacing(10),
  justifyContent: 'start',
  gridRowGap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    justifyContent: 'center',
    gridRowGap: theme.spacing(2),
  }

}))



const Project: FunctionComponent<{}> = () => {
  return (

    <Grid
      container
      rowSpacing={5}

      columnSpacing={{ xs: 4, lg: 10 }}>
      <Grid item xs={12} lg={6}>
        <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>Project Development</Typography>

        <Typography component="p">
          This project has kickstarted in 2021 and will complete its development by ***, and will be continuously updated by ***.
        </Typography>

      </Grid>
      <Grid item xs={12} lg={12}>
        <CardGrid>

          <StyledCard minHeight={60} paddingX={4} paddingY={6}>
            <Typography variant="h4">
              Publicly available
              in June 2022
            </Typography>

          </StyledCard>
          <StyledCard minHeight={60} paddingX={4} paddingY={6}>   <Typography variant="h4">Ongoing clinical validation studies through 2024
          </Typography></StyledCard >
          <StyledCard minHeight={60} paddingX={4} paddingY={6}>   <Typography variant="h4">Continued funding for technical development &amp; sustainability
          </Typography></StyledCard>
        </CardGrid>
      </Grid>
      <Grid item xs={12} lg={12} textAlign="center">
        <Button variant="outlined" color="secondary" sx={{
          margin: `${theme.spacing(7)} auto`
        }}>Full Timeline</Button>
      </Grid>
    </Grid>

  )
}

export default Project
